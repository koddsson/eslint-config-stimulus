export default {
  meta: {
    type: "problem",
    // TODO
    schema: [],
    docs: {
      description:
        "Enforces that stimulus controllers use the targets defined.",
      url: "???",
    },
    messages: {
      undeclaredTarget: "Undeclared target '{{ target }}'",
      unusedTarget: "Unused target '{{ target }}' defined",
    },
  },

  create(context) {
    // We'll collect up all the targets defined by `static targets = [..]` into this map from name to a node.
    const targets = new Map();
    // Here we'll store a set of all targets that we've then "seen" in the controller.
    const seenTargets = new Set();

    return {
      // We assume that the controller is written in a way that there's only one controller per file.
      "ExportDefaultDeclaration > ClassDeclaration[superClass.name=Controller] ClassBody PropertyDefinition[static=true][key.name=/targets*/]":
        (node) => {
          for (const element of node.value.elements) {
            targets.set(element.value, element);
          }
        },
      "MemberExpression[object.type=ThisExpression][property.name=/.*Targets*/]":
        (node) => {
          const target = node.property.name.replace("Targets", "").replace(
            "Target",
            "",
          );
          seenTargets.add(target);
          if (targets.has(target)) return;

          context.report({
            node,
            messageId: "undeclaredTarget",
            data: { target },
          });
        },
      "Program:exit": () => {
        const unseenTargets = new Set(targets.keys()).difference(seenTargets);
        for (const target of unseenTargets) {
          const node = targets.get(target);
          context.report({
            node,
            messageId: "unusedTarget",
            data: { target },
          });
        }
      },
    };
  },
};
