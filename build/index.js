"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerCase = exports.cobolCase = exports.constantCase = exports.camelCase = exports.pascalCase = exports.snakeCase = exports.kebabCase = void 0;
exports.kebabCase = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/us;
exports.snakeCase = /^([a-z][a-z0-9]*)(_[a-z0-9]+)*$/us;
exports.pascalCase = /^[A-Z][a-zA-Z0-9]*$/us;
exports.camelCase = /^[a-z][a-zA-Z0-9]*$/us;
exports.constantCase = /^([A-Z][A-Z0-9]*)(_[A-Z0-9]+)*$/us;
exports.cobolCase = /^([A-Z][A-Z0-9]*)(-[A-Z0-9]+)*$/us;
exports.headerCase = /^([A-Z][a-z0-9]*)(-[A-Z0-9][a-z0-9])*$/us;
//# sourceMappingURL=index.js.map