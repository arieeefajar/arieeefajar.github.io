class TypedManager {
  constructor(selector = "[data-typed]", defaultOptions = {}) {
    this.selector = selector;
    this.defaultOptions = {
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      ...defaultOptions,
    };
    this.instances = [];
    this.init();
  }

  init() {
    const elements = document.querySelectorAll(this.selector);
    elements.forEach((el) => {
      const strings = this.parseStrings(el);
      if (!strings.length) return;

      const options = this.buildOptions(el, strings);
      const instance = new Typed(el, options);
      this.instances.push({ el, instance });
    });
    console.log(
      `✅ TypedManager: initialized ${this.instances.length} element(s).`
    );
  }

  parseStrings(el) {
    const raw = el.dataset.typed;
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      return [raw];
    }
    return [raw];
  }

  buildOptions(el, strings) {
    const loop = el.dataset.loop === "false" ? false : true;
    const typeSpeed =
      parseInt(el.dataset.speed) || this.defaultOptions.typeSpeed;
    const backSpeed =
      parseInt(el.dataset.backspeed) || this.defaultOptions.backSpeed;

    // 🧩 Cursor control
    const showCursor = el.dataset.cursor === "false" ? false : true;
    const cursorChar = el.dataset.cursorchar || this.defaultOptions.cursorChar;

    return {
      ...this.defaultOptions,
      strings,
      loop,
      typeSpeed,
      backSpeed,
      showCursor,
      cursorChar,
    };
  }

  destroyAll() {
    this.instances.forEach(({ instance }) => instance.destroy());
    this.instances = [];
    console.log("🧹 TypedManager: all instances destroyed.");
  }
}
