import * as path from "path";
import * as fs from "fs";

export interface WasmAPI {
    add: (a: number, b: number) => number
}

const WASM_PATH = path.resolve('build/optimized.wasm')
const WASM_FILE = fs.readFileSync(WASM_PATH)

const WASM_MODULE = new WebAssembly.Module(WASM_FILE)

const imports = {
    env: {
        abort (msg: any, file: any, line: any, column: any) {
            console.error('Abort called at index.ts:')
            console.error({ msg, file, line, column })
        }
    }
}

function getWasmAPI () {
    return new WebAssembly.Instance(WASM_MODULE, imports).exports as unknown as WasmAPI
}

/** Exporting WasmAPI */
export const add = {
    ...getWasmAPI()
}
