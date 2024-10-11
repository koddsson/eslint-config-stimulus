import rule from "../../rules/unused-targets.js";
import { RuleTester } from "eslint";

const ruleTester = new RuleTester();

ruleTester.run("unused-targets", rule, {
  valid: [
    {
      name: "Controller with no targets",
      code: `import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  connect () {
    console.log('hello world');
  }
}`,
    },
    {
      name: "Controller with targets",
      code: `import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  greet() {
    this.outputTarget.textContent =
      \`Hello, \${this.nameTarget.value}!\`
  }
}`,
    },
  ],
  invalid: [
    {
      name: "Controller with one unused target",
      code: `import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  greet() {
    this.outputTarget.textContent =
      \`Hello World!\`
  }
}`,
      errors: [
        "Unused target 'name' defined",
      ],
    },
    {
      name: "Controller with multiple unused targets",
      code: `import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]
}`,
      errors: [
        "Unused target 'name' defined",
        "Unused target 'output' defined",
      ],
    },
    {
      name: "Controller with a undeclared target",
      code: `import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "output" ]

  greet() {
    console.log(this.inputTarget);
    this.outputTarget.textContent =
      \`Hello, \${this.nameTarget.value}!\`
  }
}`,
      errors: [
        "Undeclared target 'input'",
      ],
    },
  ],
});
