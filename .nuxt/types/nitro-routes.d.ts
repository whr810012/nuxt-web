// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.16.2_@netlify+blobs@_68e8dae0caffaef29bae24f41bbef6af/node_modules/nuxt/dist/core/runtime/nitro/handlers/renderer').default>>>>
    }
    '/api/_nuxt_icon/:collection': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+icon@1.12.0_magicast@_fc65dd41b3280d9a2dd5e30f8f1749fe/node_modules/@nuxt/icon/dist/runtime/server/api').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+image@1.10.0_@netlify_145505ba9580443c63ab7eb83a397f17/node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}