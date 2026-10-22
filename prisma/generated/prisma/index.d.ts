
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model StoredFile
 * 
 */
export type StoredFile = $Result.DefaultSelection<Prisma.$StoredFilePayload>
/**
 * Model FileShare
 * 
 */
export type FileShare = $Result.DefaultSelection<Prisma.$FileSharePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storedFile`: Exposes CRUD operations for the **StoredFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoredFiles
    * const storedFiles = await prisma.storedFile.findMany()
    * ```
    */
  get storedFile(): Prisma.StoredFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileShare`: Exposes CRUD operations for the **FileShare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileShares
    * const fileShares = await prisma.fileShare.findMany()
    * ```
    */
  get fileShare(): Prisma.FileShareDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    StoredFile: 'StoredFile',
    FileShare: 'FileShare'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "storedFile" | "fileShare"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      StoredFile: {
        payload: Prisma.$StoredFilePayload<ExtArgs>
        fields: Prisma.StoredFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoredFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoredFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredFilePayload>
          }
          findFirst: {
            args: Prisma.StoredFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoredFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredFilePayload>
          }
          findMany: {
            args: Prisma.StoredFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredFilePayload>[]
          }
          create: {
            args: Prisma.StoredFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredFilePayload>
          }
          createMany: {
            args: Prisma.StoredFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoredFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredFilePayload>[]
          }
          delete: {
            args: Prisma.StoredFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredFilePayload>
          }
          update: {
            args: Prisma.StoredFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredFilePayload>
          }
          deleteMany: {
            args: Prisma.StoredFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoredFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoredFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredFilePayload>[]
          }
          upsert: {
            args: Prisma.StoredFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoredFilePayload>
          }
          aggregate: {
            args: Prisma.StoredFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoredFile>
          }
          groupBy: {
            args: Prisma.StoredFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoredFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoredFileCountArgs<ExtArgs>
            result: $Utils.Optional<StoredFileCountAggregateOutputType> | number
          }
        }
      }
      FileShare: {
        payload: Prisma.$FileSharePayload<ExtArgs>
        fields: Prisma.FileShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>
          }
          findFirst: {
            args: Prisma.FileShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>
          }
          findMany: {
            args: Prisma.FileShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>[]
          }
          create: {
            args: Prisma.FileShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>
          }
          createMany: {
            args: Prisma.FileShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>[]
          }
          delete: {
            args: Prisma.FileShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>
          }
          update: {
            args: Prisma.FileShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>
          }
          deleteMany: {
            args: Prisma.FileShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>[]
          }
          upsert: {
            args: Prisma.FileShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileSharePayload>
          }
          aggregate: {
            args: Prisma.FileShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileShare>
          }
          groupBy: {
            args: Prisma.FileShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileShareCountArgs<ExtArgs>
            result: $Utils.Optional<FileShareCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    storedFile?: StoredFileOmit
    fileShare?: FileShareOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    files: number
    sharesReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | UserCountOutputTypeCountFilesArgs
    sharesReceived?: boolean | UserCountOutputTypeCountSharesReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoredFileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileShareWhereInput
  }


  /**
   * Count Type StoredFileCountOutputType
   */

  export type StoredFileCountOutputType = {
    shares: number
  }

  export type StoredFileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shares?: boolean | StoredFileCountOutputTypeCountSharesArgs
  }

  // Custom InputTypes
  /**
   * StoredFileCountOutputType without action
   */
  export type StoredFileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFileCountOutputType
     */
    select?: StoredFileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoredFileCountOutputType without action
   */
  export type StoredFileCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileShareWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    files?: boolean | User$filesArgs<ExtArgs>
    sharesReceived?: boolean | User$sharesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | User$filesArgs<ExtArgs>
    sharesReceived?: boolean | User$sharesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      files: Prisma.$StoredFilePayload<ExtArgs>[]
      sharesReceived: Prisma.$FileSharePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    files<T extends User$filesArgs<ExtArgs> = {}>(args?: Subset<T, User$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoredFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharesReceived<T extends User$sharesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$sharesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.files
   */
  export type User$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFile
     */
    select?: StoredFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredFile
     */
    omit?: StoredFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredFileInclude<ExtArgs> | null
    where?: StoredFileWhereInput
    orderBy?: StoredFileOrderByWithRelationInput | StoredFileOrderByWithRelationInput[]
    cursor?: StoredFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoredFileScalarFieldEnum | StoredFileScalarFieldEnum[]
  }

  /**
   * User.sharesReceived
   */
  export type User$sharesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareInclude<ExtArgs> | null
    where?: FileShareWhereInput
    orderBy?: FileShareOrderByWithRelationInput | FileShareOrderByWithRelationInput[]
    cursor?: FileShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileShareScalarFieldEnum | FileShareScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model StoredFile
   */

  export type AggregateStoredFile = {
    _count: StoredFileCountAggregateOutputType | null
    _avg: StoredFileAvgAggregateOutputType | null
    _sum: StoredFileSumAggregateOutputType | null
    _min: StoredFileMinAggregateOutputType | null
    _max: StoredFileMaxAggregateOutputType | null
  }

  export type StoredFileAvgAggregateOutputType = {
    sizeBytes: number | null
  }

  export type StoredFileSumAggregateOutputType = {
    sizeBytes: number | null
  }

  export type StoredFileMinAggregateOutputType = {
    id: string | null
    originalName: string | null
    storageKey: string | null
    mimeType: string | null
    sizeBytes: number | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoredFileMaxAggregateOutputType = {
    id: string | null
    originalName: string | null
    storageKey: string | null
    mimeType: string | null
    sizeBytes: number | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoredFileCountAggregateOutputType = {
    id: number
    originalName: number
    storageKey: number
    mimeType: number
    sizeBytes: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoredFileAvgAggregateInputType = {
    sizeBytes?: true
  }

  export type StoredFileSumAggregateInputType = {
    sizeBytes?: true
  }

  export type StoredFileMinAggregateInputType = {
    id?: true
    originalName?: true
    storageKey?: true
    mimeType?: true
    sizeBytes?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoredFileMaxAggregateInputType = {
    id?: true
    originalName?: true
    storageKey?: true
    mimeType?: true
    sizeBytes?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoredFileCountAggregateInputType = {
    id?: true
    originalName?: true
    storageKey?: true
    mimeType?: true
    sizeBytes?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoredFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoredFile to aggregate.
     */
    where?: StoredFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoredFiles to fetch.
     */
    orderBy?: StoredFileOrderByWithRelationInput | StoredFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoredFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoredFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoredFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoredFiles
    **/
    _count?: true | StoredFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoredFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoredFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoredFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoredFileMaxAggregateInputType
  }

  export type GetStoredFileAggregateType<T extends StoredFileAggregateArgs> = {
        [P in keyof T & keyof AggregateStoredFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoredFile[P]>
      : GetScalarType<T[P], AggregateStoredFile[P]>
  }




  export type StoredFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoredFileWhereInput
    orderBy?: StoredFileOrderByWithAggregationInput | StoredFileOrderByWithAggregationInput[]
    by: StoredFileScalarFieldEnum[] | StoredFileScalarFieldEnum
    having?: StoredFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoredFileCountAggregateInputType | true
    _avg?: StoredFileAvgAggregateInputType
    _sum?: StoredFileSumAggregateInputType
    _min?: StoredFileMinAggregateInputType
    _max?: StoredFileMaxAggregateInputType
  }

  export type StoredFileGroupByOutputType = {
    id: string
    originalName: string
    storageKey: string
    mimeType: string
    sizeBytes: number
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: StoredFileCountAggregateOutputType | null
    _avg: StoredFileAvgAggregateOutputType | null
    _sum: StoredFileSumAggregateOutputType | null
    _min: StoredFileMinAggregateOutputType | null
    _max: StoredFileMaxAggregateOutputType | null
  }

  type GetStoredFileGroupByPayload<T extends StoredFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoredFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoredFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoredFileGroupByOutputType[P]>
            : GetScalarType<T[P], StoredFileGroupByOutputType[P]>
        }
      >
    >


  export type StoredFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalName?: boolean
    storageKey?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    shares?: boolean | StoredFile$sharesArgs<ExtArgs>
    _count?: boolean | StoredFileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storedFile"]>

  export type StoredFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalName?: boolean
    storageKey?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storedFile"]>

  export type StoredFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalName?: boolean
    storageKey?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storedFile"]>

  export type StoredFileSelectScalar = {
    id?: boolean
    originalName?: boolean
    storageKey?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoredFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalName" | "storageKey" | "mimeType" | "sizeBytes" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["storedFile"]>
  export type StoredFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    shares?: boolean | StoredFile$sharesArgs<ExtArgs>
    _count?: boolean | StoredFileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoredFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StoredFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StoredFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoredFile"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      shares: Prisma.$FileSharePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originalName: string
      storageKey: string
      mimeType: string
      sizeBytes: number
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["storedFile"]>
    composites: {}
  }

  type StoredFileGetPayload<S extends boolean | null | undefined | StoredFileDefaultArgs> = $Result.GetResult<Prisma.$StoredFilePayload, S>

  type StoredFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoredFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoredFileCountAggregateInputType | true
    }

  export interface StoredFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoredFile'], meta: { name: 'StoredFile' } }
    /**
     * Find zero or one StoredFile that matches the filter.
     * @param {StoredFileFindUniqueArgs} args - Arguments to find a StoredFile
     * @example
     * // Get one StoredFile
     * const storedFile = await prisma.storedFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoredFileFindUniqueArgs>(args: SelectSubset<T, StoredFileFindUniqueArgs<ExtArgs>>): Prisma__StoredFileClient<$Result.GetResult<Prisma.$StoredFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoredFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoredFileFindUniqueOrThrowArgs} args - Arguments to find a StoredFile
     * @example
     * // Get one StoredFile
     * const storedFile = await prisma.storedFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoredFileFindUniqueOrThrowArgs>(args: SelectSubset<T, StoredFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoredFileClient<$Result.GetResult<Prisma.$StoredFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoredFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredFileFindFirstArgs} args - Arguments to find a StoredFile
     * @example
     * // Get one StoredFile
     * const storedFile = await prisma.storedFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoredFileFindFirstArgs>(args?: SelectSubset<T, StoredFileFindFirstArgs<ExtArgs>>): Prisma__StoredFileClient<$Result.GetResult<Prisma.$StoredFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoredFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredFileFindFirstOrThrowArgs} args - Arguments to find a StoredFile
     * @example
     * // Get one StoredFile
     * const storedFile = await prisma.storedFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoredFileFindFirstOrThrowArgs>(args?: SelectSubset<T, StoredFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoredFileClient<$Result.GetResult<Prisma.$StoredFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoredFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoredFiles
     * const storedFiles = await prisma.storedFile.findMany()
     * 
     * // Get first 10 StoredFiles
     * const storedFiles = await prisma.storedFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storedFileWithIdOnly = await prisma.storedFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoredFileFindManyArgs>(args?: SelectSubset<T, StoredFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoredFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoredFile.
     * @param {StoredFileCreateArgs} args - Arguments to create a StoredFile.
     * @example
     * // Create one StoredFile
     * const StoredFile = await prisma.storedFile.create({
     *   data: {
     *     // ... data to create a StoredFile
     *   }
     * })
     * 
     */
    create<T extends StoredFileCreateArgs>(args: SelectSubset<T, StoredFileCreateArgs<ExtArgs>>): Prisma__StoredFileClient<$Result.GetResult<Prisma.$StoredFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoredFiles.
     * @param {StoredFileCreateManyArgs} args - Arguments to create many StoredFiles.
     * @example
     * // Create many StoredFiles
     * const storedFile = await prisma.storedFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoredFileCreateManyArgs>(args?: SelectSubset<T, StoredFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoredFiles and returns the data saved in the database.
     * @param {StoredFileCreateManyAndReturnArgs} args - Arguments to create many StoredFiles.
     * @example
     * // Create many StoredFiles
     * const storedFile = await prisma.storedFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoredFiles and only return the `id`
     * const storedFileWithIdOnly = await prisma.storedFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoredFileCreateManyAndReturnArgs>(args?: SelectSubset<T, StoredFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoredFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoredFile.
     * @param {StoredFileDeleteArgs} args - Arguments to delete one StoredFile.
     * @example
     * // Delete one StoredFile
     * const StoredFile = await prisma.storedFile.delete({
     *   where: {
     *     // ... filter to delete one StoredFile
     *   }
     * })
     * 
     */
    delete<T extends StoredFileDeleteArgs>(args: SelectSubset<T, StoredFileDeleteArgs<ExtArgs>>): Prisma__StoredFileClient<$Result.GetResult<Prisma.$StoredFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoredFile.
     * @param {StoredFileUpdateArgs} args - Arguments to update one StoredFile.
     * @example
     * // Update one StoredFile
     * const storedFile = await prisma.storedFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoredFileUpdateArgs>(args: SelectSubset<T, StoredFileUpdateArgs<ExtArgs>>): Prisma__StoredFileClient<$Result.GetResult<Prisma.$StoredFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoredFiles.
     * @param {StoredFileDeleteManyArgs} args - Arguments to filter StoredFiles to delete.
     * @example
     * // Delete a few StoredFiles
     * const { count } = await prisma.storedFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoredFileDeleteManyArgs>(args?: SelectSubset<T, StoredFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoredFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoredFiles
     * const storedFile = await prisma.storedFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoredFileUpdateManyArgs>(args: SelectSubset<T, StoredFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoredFiles and returns the data updated in the database.
     * @param {StoredFileUpdateManyAndReturnArgs} args - Arguments to update many StoredFiles.
     * @example
     * // Update many StoredFiles
     * const storedFile = await prisma.storedFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoredFiles and only return the `id`
     * const storedFileWithIdOnly = await prisma.storedFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoredFileUpdateManyAndReturnArgs>(args: SelectSubset<T, StoredFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoredFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoredFile.
     * @param {StoredFileUpsertArgs} args - Arguments to update or create a StoredFile.
     * @example
     * // Update or create a StoredFile
     * const storedFile = await prisma.storedFile.upsert({
     *   create: {
     *     // ... data to create a StoredFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoredFile we want to update
     *   }
     * })
     */
    upsert<T extends StoredFileUpsertArgs>(args: SelectSubset<T, StoredFileUpsertArgs<ExtArgs>>): Prisma__StoredFileClient<$Result.GetResult<Prisma.$StoredFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoredFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredFileCountArgs} args - Arguments to filter StoredFiles to count.
     * @example
     * // Count the number of StoredFiles
     * const count = await prisma.storedFile.count({
     *   where: {
     *     // ... the filter for the StoredFiles we want to count
     *   }
     * })
    **/
    count<T extends StoredFileCountArgs>(
      args?: Subset<T, StoredFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoredFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoredFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoredFileAggregateArgs>(args: Subset<T, StoredFileAggregateArgs>): Prisma.PrismaPromise<GetStoredFileAggregateType<T>>

    /**
     * Group by StoredFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoredFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoredFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoredFileGroupByArgs['orderBy'] }
        : { orderBy?: StoredFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoredFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoredFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoredFile model
   */
  readonly fields: StoredFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoredFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoredFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shares<T extends StoredFile$sharesArgs<ExtArgs> = {}>(args?: Subset<T, StoredFile$sharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoredFile model
   */
  interface StoredFileFieldRefs {
    readonly id: FieldRef<"StoredFile", 'String'>
    readonly originalName: FieldRef<"StoredFile", 'String'>
    readonly storageKey: FieldRef<"StoredFile", 'String'>
    readonly mimeType: FieldRef<"StoredFile", 'String'>
    readonly sizeBytes: FieldRef<"StoredFile", 'Int'>
    readonly ownerId: FieldRef<"StoredFile", 'String'>
    readonly createdAt: FieldRef<"StoredFile", 'DateTime'>
    readonly updatedAt: FieldRef<"StoredFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoredFile findUnique
   */
  export type StoredFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFile
     */
    select?: StoredFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredFile
     */
    omit?: StoredFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredFileInclude<ExtArgs> | null
    /**
     * Filter, which StoredFile to fetch.
     */
    where: StoredFileWhereUniqueInput
  }

  /**
   * StoredFile findUniqueOrThrow
   */
  export type StoredFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFile
     */
    select?: StoredFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredFile
     */
    omit?: StoredFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredFileInclude<ExtArgs> | null
    /**
     * Filter, which StoredFile to fetch.
     */
    where: StoredFileWhereUniqueInput
  }

  /**
   * StoredFile findFirst
   */
  export type StoredFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFile
     */
    select?: StoredFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredFile
     */
    omit?: StoredFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredFileInclude<ExtArgs> | null
    /**
     * Filter, which StoredFile to fetch.
     */
    where?: StoredFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoredFiles to fetch.
     */
    orderBy?: StoredFileOrderByWithRelationInput | StoredFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoredFiles.
     */
    cursor?: StoredFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoredFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoredFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoredFiles.
     */
    distinct?: StoredFileScalarFieldEnum | StoredFileScalarFieldEnum[]
  }

  /**
   * StoredFile findFirstOrThrow
   */
  export type StoredFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFile
     */
    select?: StoredFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredFile
     */
    omit?: StoredFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredFileInclude<ExtArgs> | null
    /**
     * Filter, which StoredFile to fetch.
     */
    where?: StoredFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoredFiles to fetch.
     */
    orderBy?: StoredFileOrderByWithRelationInput | StoredFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoredFiles.
     */
    cursor?: StoredFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoredFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoredFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoredFiles.
     */
    distinct?: StoredFileScalarFieldEnum | StoredFileScalarFieldEnum[]
  }

  /**
   * StoredFile findMany
   */
  export type StoredFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFile
     */
    select?: StoredFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredFile
     */
    omit?: StoredFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredFileInclude<ExtArgs> | null
    /**
     * Filter, which StoredFiles to fetch.
     */
    where?: StoredFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoredFiles to fetch.
     */
    orderBy?: StoredFileOrderByWithRelationInput | StoredFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoredFiles.
     */
    cursor?: StoredFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoredFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoredFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoredFiles.
     */
    distinct?: StoredFileScalarFieldEnum | StoredFileScalarFieldEnum[]
  }

  /**
   * StoredFile create
   */
  export type StoredFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFile
     */
    select?: StoredFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredFile
     */
    omit?: StoredFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredFileInclude<ExtArgs> | null
    /**
     * The data needed to create a StoredFile.
     */
    data: XOR<StoredFileCreateInput, StoredFileUncheckedCreateInput>
  }

  /**
   * StoredFile createMany
   */
  export type StoredFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoredFiles.
     */
    data: StoredFileCreateManyInput | StoredFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoredFile createManyAndReturn
   */
  export type StoredFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFile
     */
    select?: StoredFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoredFile
     */
    omit?: StoredFileOmit<ExtArgs> | null
    /**
     * The data used to create many StoredFiles.
     */
    data: StoredFileCreateManyInput | StoredFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoredFile update
   */
  export type StoredFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFile
     */
    select?: StoredFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredFile
     */
    omit?: StoredFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredFileInclude<ExtArgs> | null
    /**
     * The data needed to update a StoredFile.
     */
    data: XOR<StoredFileUpdateInput, StoredFileUncheckedUpdateInput>
    /**
     * Choose, which StoredFile to update.
     */
    where: StoredFileWhereUniqueInput
  }

  /**
   * StoredFile updateMany
   */
  export type StoredFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoredFiles.
     */
    data: XOR<StoredFileUpdateManyMutationInput, StoredFileUncheckedUpdateManyInput>
    /**
     * Filter which StoredFiles to update
     */
    where?: StoredFileWhereInput
    /**
     * Limit how many StoredFiles to update.
     */
    limit?: number
  }

  /**
   * StoredFile updateManyAndReturn
   */
  export type StoredFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFile
     */
    select?: StoredFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoredFile
     */
    omit?: StoredFileOmit<ExtArgs> | null
    /**
     * The data used to update StoredFiles.
     */
    data: XOR<StoredFileUpdateManyMutationInput, StoredFileUncheckedUpdateManyInput>
    /**
     * Filter which StoredFiles to update
     */
    where?: StoredFileWhereInput
    /**
     * Limit how many StoredFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoredFile upsert
   */
  export type StoredFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFile
     */
    select?: StoredFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredFile
     */
    omit?: StoredFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredFileInclude<ExtArgs> | null
    /**
     * The filter to search for the StoredFile to update in case it exists.
     */
    where: StoredFileWhereUniqueInput
    /**
     * In case the StoredFile found by the `where` argument doesn't exist, create a new StoredFile with this data.
     */
    create: XOR<StoredFileCreateInput, StoredFileUncheckedCreateInput>
    /**
     * In case the StoredFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoredFileUpdateInput, StoredFileUncheckedUpdateInput>
  }

  /**
   * StoredFile delete
   */
  export type StoredFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFile
     */
    select?: StoredFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredFile
     */
    omit?: StoredFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredFileInclude<ExtArgs> | null
    /**
     * Filter which StoredFile to delete.
     */
    where: StoredFileWhereUniqueInput
  }

  /**
   * StoredFile deleteMany
   */
  export type StoredFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoredFiles to delete
     */
    where?: StoredFileWhereInput
    /**
     * Limit how many StoredFiles to delete.
     */
    limit?: number
  }

  /**
   * StoredFile.shares
   */
  export type StoredFile$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareInclude<ExtArgs> | null
    where?: FileShareWhereInput
    orderBy?: FileShareOrderByWithRelationInput | FileShareOrderByWithRelationInput[]
    cursor?: FileShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileShareScalarFieldEnum | FileShareScalarFieldEnum[]
  }

  /**
   * StoredFile without action
   */
  export type StoredFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoredFile
     */
    select?: StoredFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoredFile
     */
    omit?: StoredFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoredFileInclude<ExtArgs> | null
  }


  /**
   * Model FileShare
   */

  export type AggregateFileShare = {
    _count: FileShareCountAggregateOutputType | null
    _min: FileShareMinAggregateOutputType | null
    _max: FileShareMaxAggregateOutputType | null
  }

  export type FileShareMinAggregateOutputType = {
    id: string | null
    fileId: string | null
    recipientId: string | null
    createdAt: Date | null
  }

  export type FileShareMaxAggregateOutputType = {
    id: string | null
    fileId: string | null
    recipientId: string | null
    createdAt: Date | null
  }

  export type FileShareCountAggregateOutputType = {
    id: number
    fileId: number
    recipientId: number
    createdAt: number
    _all: number
  }


  export type FileShareMinAggregateInputType = {
    id?: true
    fileId?: true
    recipientId?: true
    createdAt?: true
  }

  export type FileShareMaxAggregateInputType = {
    id?: true
    fileId?: true
    recipientId?: true
    createdAt?: true
  }

  export type FileShareCountAggregateInputType = {
    id?: true
    fileId?: true
    recipientId?: true
    createdAt?: true
    _all?: true
  }

  export type FileShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileShare to aggregate.
     */
    where?: FileShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileShares to fetch.
     */
    orderBy?: FileShareOrderByWithRelationInput | FileShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileShares
    **/
    _count?: true | FileShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileShareMaxAggregateInputType
  }

  export type GetFileShareAggregateType<T extends FileShareAggregateArgs> = {
        [P in keyof T & keyof AggregateFileShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileShare[P]>
      : GetScalarType<T[P], AggregateFileShare[P]>
  }




  export type FileShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileShareWhereInput
    orderBy?: FileShareOrderByWithAggregationInput | FileShareOrderByWithAggregationInput[]
    by: FileShareScalarFieldEnum[] | FileShareScalarFieldEnum
    having?: FileShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileShareCountAggregateInputType | true
    _min?: FileShareMinAggregateInputType
    _max?: FileShareMaxAggregateInputType
  }

  export type FileShareGroupByOutputType = {
    id: string
    fileId: string
    recipientId: string
    createdAt: Date
    _count: FileShareCountAggregateOutputType | null
    _min: FileShareMinAggregateOutputType | null
    _max: FileShareMaxAggregateOutputType | null
  }

  type GetFileShareGroupByPayload<T extends FileShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileShareGroupByOutputType[P]>
            : GetScalarType<T[P], FileShareGroupByOutputType[P]>
        }
      >
    >


  export type FileShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    recipientId?: boolean
    createdAt?: boolean
    file?: boolean | StoredFileDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileShare"]>

  export type FileShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    recipientId?: boolean
    createdAt?: boolean
    file?: boolean | StoredFileDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileShare"]>

  export type FileShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileId?: boolean
    recipientId?: boolean
    createdAt?: boolean
    file?: boolean | StoredFileDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileShare"]>

  export type FileShareSelectScalar = {
    id?: boolean
    fileId?: boolean
    recipientId?: boolean
    createdAt?: boolean
  }

  export type FileShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileId" | "recipientId" | "createdAt", ExtArgs["result"]["fileShare"]>
  export type FileShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | StoredFileDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FileShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | StoredFileDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FileShareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | StoredFileDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FileSharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileShare"
    objects: {
      file: Prisma.$StoredFilePayload<ExtArgs>
      recipient: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileId: string
      recipientId: string
      createdAt: Date
    }, ExtArgs["result"]["fileShare"]>
    composites: {}
  }

  type FileShareGetPayload<S extends boolean | null | undefined | FileShareDefaultArgs> = $Result.GetResult<Prisma.$FileSharePayload, S>

  type FileShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileShareCountAggregateInputType | true
    }

  export interface FileShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileShare'], meta: { name: 'FileShare' } }
    /**
     * Find zero or one FileShare that matches the filter.
     * @param {FileShareFindUniqueArgs} args - Arguments to find a FileShare
     * @example
     * // Get one FileShare
     * const fileShare = await prisma.fileShare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileShareFindUniqueArgs>(args: SelectSubset<T, FileShareFindUniqueArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileShare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileShareFindUniqueOrThrowArgs} args - Arguments to find a FileShare
     * @example
     * // Get one FileShare
     * const fileShare = await prisma.fileShare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileShareFindUniqueOrThrowArgs>(args: SelectSubset<T, FileShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileShare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareFindFirstArgs} args - Arguments to find a FileShare
     * @example
     * // Get one FileShare
     * const fileShare = await prisma.fileShare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileShareFindFirstArgs>(args?: SelectSubset<T, FileShareFindFirstArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileShare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareFindFirstOrThrowArgs} args - Arguments to find a FileShare
     * @example
     * // Get one FileShare
     * const fileShare = await prisma.fileShare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileShareFindFirstOrThrowArgs>(args?: SelectSubset<T, FileShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileShares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileShares
     * const fileShares = await prisma.fileShare.findMany()
     * 
     * // Get first 10 FileShares
     * const fileShares = await prisma.fileShare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileShareWithIdOnly = await prisma.fileShare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileShareFindManyArgs>(args?: SelectSubset<T, FileShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileShare.
     * @param {FileShareCreateArgs} args - Arguments to create a FileShare.
     * @example
     * // Create one FileShare
     * const FileShare = await prisma.fileShare.create({
     *   data: {
     *     // ... data to create a FileShare
     *   }
     * })
     * 
     */
    create<T extends FileShareCreateArgs>(args: SelectSubset<T, FileShareCreateArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileShares.
     * @param {FileShareCreateManyArgs} args - Arguments to create many FileShares.
     * @example
     * // Create many FileShares
     * const fileShare = await prisma.fileShare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileShareCreateManyArgs>(args?: SelectSubset<T, FileShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileShares and returns the data saved in the database.
     * @param {FileShareCreateManyAndReturnArgs} args - Arguments to create many FileShares.
     * @example
     * // Create many FileShares
     * const fileShare = await prisma.fileShare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileShares and only return the `id`
     * const fileShareWithIdOnly = await prisma.fileShare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileShareCreateManyAndReturnArgs>(args?: SelectSubset<T, FileShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileShare.
     * @param {FileShareDeleteArgs} args - Arguments to delete one FileShare.
     * @example
     * // Delete one FileShare
     * const FileShare = await prisma.fileShare.delete({
     *   where: {
     *     // ... filter to delete one FileShare
     *   }
     * })
     * 
     */
    delete<T extends FileShareDeleteArgs>(args: SelectSubset<T, FileShareDeleteArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileShare.
     * @param {FileShareUpdateArgs} args - Arguments to update one FileShare.
     * @example
     * // Update one FileShare
     * const fileShare = await prisma.fileShare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileShareUpdateArgs>(args: SelectSubset<T, FileShareUpdateArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileShares.
     * @param {FileShareDeleteManyArgs} args - Arguments to filter FileShares to delete.
     * @example
     * // Delete a few FileShares
     * const { count } = await prisma.fileShare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileShareDeleteManyArgs>(args?: SelectSubset<T, FileShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileShares
     * const fileShare = await prisma.fileShare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileShareUpdateManyArgs>(args: SelectSubset<T, FileShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileShares and returns the data updated in the database.
     * @param {FileShareUpdateManyAndReturnArgs} args - Arguments to update many FileShares.
     * @example
     * // Update many FileShares
     * const fileShare = await prisma.fileShare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileShares and only return the `id`
     * const fileShareWithIdOnly = await prisma.fileShare.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileShareUpdateManyAndReturnArgs>(args: SelectSubset<T, FileShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileShare.
     * @param {FileShareUpsertArgs} args - Arguments to update or create a FileShare.
     * @example
     * // Update or create a FileShare
     * const fileShare = await prisma.fileShare.upsert({
     *   create: {
     *     // ... data to create a FileShare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileShare we want to update
     *   }
     * })
     */
    upsert<T extends FileShareUpsertArgs>(args: SelectSubset<T, FileShareUpsertArgs<ExtArgs>>): Prisma__FileShareClient<$Result.GetResult<Prisma.$FileSharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareCountArgs} args - Arguments to filter FileShares to count.
     * @example
     * // Count the number of FileShares
     * const count = await prisma.fileShare.count({
     *   where: {
     *     // ... the filter for the FileShares we want to count
     *   }
     * })
    **/
    count<T extends FileShareCountArgs>(
      args?: Subset<T, FileShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileShareAggregateArgs>(args: Subset<T, FileShareAggregateArgs>): Prisma.PrismaPromise<GetFileShareAggregateType<T>>

    /**
     * Group by FileShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileShareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileShareGroupByArgs['orderBy'] }
        : { orderBy?: FileShareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileShare model
   */
  readonly fields: FileShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileShare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends StoredFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoredFileDefaultArgs<ExtArgs>>): Prisma__StoredFileClient<$Result.GetResult<Prisma.$StoredFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileShare model
   */
  interface FileShareFieldRefs {
    readonly id: FieldRef<"FileShare", 'String'>
    readonly fileId: FieldRef<"FileShare", 'String'>
    readonly recipientId: FieldRef<"FileShare", 'String'>
    readonly createdAt: FieldRef<"FileShare", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileShare findUnique
   */
  export type FileShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareInclude<ExtArgs> | null
    /**
     * Filter, which FileShare to fetch.
     */
    where: FileShareWhereUniqueInput
  }

  /**
   * FileShare findUniqueOrThrow
   */
  export type FileShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareInclude<ExtArgs> | null
    /**
     * Filter, which FileShare to fetch.
     */
    where: FileShareWhereUniqueInput
  }

  /**
   * FileShare findFirst
   */
  export type FileShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareInclude<ExtArgs> | null
    /**
     * Filter, which FileShare to fetch.
     */
    where?: FileShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileShares to fetch.
     */
    orderBy?: FileShareOrderByWithRelationInput | FileShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileShares.
     */
    cursor?: FileShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileShares.
     */
    distinct?: FileShareScalarFieldEnum | FileShareScalarFieldEnum[]
  }

  /**
   * FileShare findFirstOrThrow
   */
  export type FileShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareInclude<ExtArgs> | null
    /**
     * Filter, which FileShare to fetch.
     */
    where?: FileShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileShares to fetch.
     */
    orderBy?: FileShareOrderByWithRelationInput | FileShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileShares.
     */
    cursor?: FileShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileShares.
     */
    distinct?: FileShareScalarFieldEnum | FileShareScalarFieldEnum[]
  }

  /**
   * FileShare findMany
   */
  export type FileShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareInclude<ExtArgs> | null
    /**
     * Filter, which FileShares to fetch.
     */
    where?: FileShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileShares to fetch.
     */
    orderBy?: FileShareOrderByWithRelationInput | FileShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileShares.
     */
    cursor?: FileShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileShares.
     */
    distinct?: FileShareScalarFieldEnum | FileShareScalarFieldEnum[]
  }

  /**
   * FileShare create
   */
  export type FileShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareInclude<ExtArgs> | null
    /**
     * The data needed to create a FileShare.
     */
    data: XOR<FileShareCreateInput, FileShareUncheckedCreateInput>
  }

  /**
   * FileShare createMany
   */
  export type FileShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileShares.
     */
    data: FileShareCreateManyInput | FileShareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileShare createManyAndReturn
   */
  export type FileShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * The data used to create many FileShares.
     */
    data: FileShareCreateManyInput | FileShareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileShare update
   */
  export type FileShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareInclude<ExtArgs> | null
    /**
     * The data needed to update a FileShare.
     */
    data: XOR<FileShareUpdateInput, FileShareUncheckedUpdateInput>
    /**
     * Choose, which FileShare to update.
     */
    where: FileShareWhereUniqueInput
  }

  /**
   * FileShare updateMany
   */
  export type FileShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileShares.
     */
    data: XOR<FileShareUpdateManyMutationInput, FileShareUncheckedUpdateManyInput>
    /**
     * Filter which FileShares to update
     */
    where?: FileShareWhereInput
    /**
     * Limit how many FileShares to update.
     */
    limit?: number
  }

  /**
   * FileShare updateManyAndReturn
   */
  export type FileShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * The data used to update FileShares.
     */
    data: XOR<FileShareUpdateManyMutationInput, FileShareUncheckedUpdateManyInput>
    /**
     * Filter which FileShares to update
     */
    where?: FileShareWhereInput
    /**
     * Limit how many FileShares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileShare upsert
   */
  export type FileShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareInclude<ExtArgs> | null
    /**
     * The filter to search for the FileShare to update in case it exists.
     */
    where: FileShareWhereUniqueInput
    /**
     * In case the FileShare found by the `where` argument doesn't exist, create a new FileShare with this data.
     */
    create: XOR<FileShareCreateInput, FileShareUncheckedCreateInput>
    /**
     * In case the FileShare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileShareUpdateInput, FileShareUncheckedUpdateInput>
  }

  /**
   * FileShare delete
   */
  export type FileShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareInclude<ExtArgs> | null
    /**
     * Filter which FileShare to delete.
     */
    where: FileShareWhereUniqueInput
  }

  /**
   * FileShare deleteMany
   */
  export type FileShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileShares to delete
     */
    where?: FileShareWhereInput
    /**
     * Limit how many FileShares to delete.
     */
    limit?: number
  }

  /**
   * FileShare without action
   */
  export type FileShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileShare
     */
    select?: FileShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileShare
     */
    omit?: FileShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileShareInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StoredFileScalarFieldEnum: {
    id: 'id',
    originalName: 'originalName',
    storageKey: 'storageKey',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoredFileScalarFieldEnum = (typeof StoredFileScalarFieldEnum)[keyof typeof StoredFileScalarFieldEnum]


  export const FileShareScalarFieldEnum: {
    id: 'id',
    fileId: 'fileId',
    recipientId: 'recipientId',
    createdAt: 'createdAt'
  };

  export type FileShareScalarFieldEnum = (typeof FileShareScalarFieldEnum)[keyof typeof FileShareScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    files?: StoredFileListRelationFilter
    sharesReceived?: FileShareListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    files?: StoredFileOrderByRelationAggregateInput
    sharesReceived?: FileShareOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    files?: StoredFileListRelationFilter
    sharesReceived?: FileShareListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StoredFileWhereInput = {
    AND?: StoredFileWhereInput | StoredFileWhereInput[]
    OR?: StoredFileWhereInput[]
    NOT?: StoredFileWhereInput | StoredFileWhereInput[]
    id?: StringFilter<"StoredFile"> | string
    originalName?: StringFilter<"StoredFile"> | string
    storageKey?: StringFilter<"StoredFile"> | string
    mimeType?: StringFilter<"StoredFile"> | string
    sizeBytes?: IntFilter<"StoredFile"> | number
    ownerId?: StringFilter<"StoredFile"> | string
    createdAt?: DateTimeFilter<"StoredFile"> | Date | string
    updatedAt?: DateTimeFilter<"StoredFile"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    shares?: FileShareListRelationFilter
  }

  export type StoredFileOrderByWithRelationInput = {
    id?: SortOrder
    originalName?: SortOrder
    storageKey?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    shares?: FileShareOrderByRelationAggregateInput
  }

  export type StoredFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    storageKey?: string
    AND?: StoredFileWhereInput | StoredFileWhereInput[]
    OR?: StoredFileWhereInput[]
    NOT?: StoredFileWhereInput | StoredFileWhereInput[]
    originalName?: StringFilter<"StoredFile"> | string
    mimeType?: StringFilter<"StoredFile"> | string
    sizeBytes?: IntFilter<"StoredFile"> | number
    ownerId?: StringFilter<"StoredFile"> | string
    createdAt?: DateTimeFilter<"StoredFile"> | Date | string
    updatedAt?: DateTimeFilter<"StoredFile"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    shares?: FileShareListRelationFilter
  }, "id" | "storageKey">

  export type StoredFileOrderByWithAggregationInput = {
    id?: SortOrder
    originalName?: SortOrder
    storageKey?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoredFileCountOrderByAggregateInput
    _avg?: StoredFileAvgOrderByAggregateInput
    _max?: StoredFileMaxOrderByAggregateInput
    _min?: StoredFileMinOrderByAggregateInput
    _sum?: StoredFileSumOrderByAggregateInput
  }

  export type StoredFileScalarWhereWithAggregatesInput = {
    AND?: StoredFileScalarWhereWithAggregatesInput | StoredFileScalarWhereWithAggregatesInput[]
    OR?: StoredFileScalarWhereWithAggregatesInput[]
    NOT?: StoredFileScalarWhereWithAggregatesInput | StoredFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StoredFile"> | string
    originalName?: StringWithAggregatesFilter<"StoredFile"> | string
    storageKey?: StringWithAggregatesFilter<"StoredFile"> | string
    mimeType?: StringWithAggregatesFilter<"StoredFile"> | string
    sizeBytes?: IntWithAggregatesFilter<"StoredFile"> | number
    ownerId?: StringWithAggregatesFilter<"StoredFile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StoredFile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StoredFile"> | Date | string
  }

  export type FileShareWhereInput = {
    AND?: FileShareWhereInput | FileShareWhereInput[]
    OR?: FileShareWhereInput[]
    NOT?: FileShareWhereInput | FileShareWhereInput[]
    id?: StringFilter<"FileShare"> | string
    fileId?: StringFilter<"FileShare"> | string
    recipientId?: StringFilter<"FileShare"> | string
    createdAt?: DateTimeFilter<"FileShare"> | Date | string
    file?: XOR<StoredFileScalarRelationFilter, StoredFileWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FileShareOrderByWithRelationInput = {
    id?: SortOrder
    fileId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
    file?: StoredFileOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
  }

  export type FileShareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fileId_recipientId?: FileShareFileIdRecipientIdCompoundUniqueInput
    AND?: FileShareWhereInput | FileShareWhereInput[]
    OR?: FileShareWhereInput[]
    NOT?: FileShareWhereInput | FileShareWhereInput[]
    fileId?: StringFilter<"FileShare"> | string
    recipientId?: StringFilter<"FileShare"> | string
    createdAt?: DateTimeFilter<"FileShare"> | Date | string
    file?: XOR<StoredFileScalarRelationFilter, StoredFileWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "fileId_recipientId">

  export type FileShareOrderByWithAggregationInput = {
    id?: SortOrder
    fileId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
    _count?: FileShareCountOrderByAggregateInput
    _max?: FileShareMaxOrderByAggregateInput
    _min?: FileShareMinOrderByAggregateInput
  }

  export type FileShareScalarWhereWithAggregatesInput = {
    AND?: FileShareScalarWhereWithAggregatesInput | FileShareScalarWhereWithAggregatesInput[]
    OR?: FileShareScalarWhereWithAggregatesInput[]
    NOT?: FileShareScalarWhereWithAggregatesInput | FileShareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FileShare"> | string
    fileId?: StringWithAggregatesFilter<"FileShare"> | string
    recipientId?: StringWithAggregatesFilter<"FileShare"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FileShare"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: StoredFileCreateNestedManyWithoutOwnerInput
    sharesReceived?: FileShareCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: StoredFileUncheckedCreateNestedManyWithoutOwnerInput
    sharesReceived?: FileShareUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: StoredFileUpdateManyWithoutOwnerNestedInput
    sharesReceived?: FileShareUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: StoredFileUncheckedUpdateManyWithoutOwnerNestedInput
    sharesReceived?: FileShareUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoredFileCreateInput = {
    id?: string
    originalName: string
    storageKey: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFilesInput
    shares?: FileShareCreateNestedManyWithoutFileInput
  }

  export type StoredFileUncheckedCreateInput = {
    id?: string
    originalName: string
    storageKey: string
    mimeType: string
    sizeBytes: number
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shares?: FileShareUncheckedCreateNestedManyWithoutFileInput
  }

  export type StoredFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFilesNestedInput
    shares?: FileShareUpdateManyWithoutFileNestedInput
  }

  export type StoredFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: FileShareUncheckedUpdateManyWithoutFileNestedInput
  }

  export type StoredFileCreateManyInput = {
    id?: string
    originalName: string
    storageKey: string
    mimeType: string
    sizeBytes: number
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoredFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoredFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileShareCreateInput = {
    id?: string
    createdAt?: Date | string
    file: StoredFileCreateNestedOneWithoutSharesInput
    recipient: UserCreateNestedOneWithoutSharesReceivedInput
  }

  export type FileShareUncheckedCreateInput = {
    id?: string
    fileId: string
    recipientId: string
    createdAt?: Date | string
  }

  export type FileShareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: StoredFileUpdateOneRequiredWithoutSharesNestedInput
    recipient?: UserUpdateOneRequiredWithoutSharesReceivedNestedInput
  }

  export type FileShareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileShareCreateManyInput = {
    id?: string
    fileId: string
    recipientId: string
    createdAt?: Date | string
  }

  export type FileShareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileShareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StoredFileListRelationFilter = {
    every?: StoredFileWhereInput
    some?: StoredFileWhereInput
    none?: StoredFileWhereInput
  }

  export type FileShareListRelationFilter = {
    every?: FileShareWhereInput
    some?: FileShareWhereInput
    none?: FileShareWhereInput
  }

  export type StoredFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileShareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StoredFileCountOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    storageKey?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoredFileAvgOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type StoredFileMaxOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    storageKey?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoredFileMinOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    storageKey?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoredFileSumOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StoredFileScalarRelationFilter = {
    is?: StoredFileWhereInput
    isNot?: StoredFileWhereInput
  }

  export type FileShareFileIdRecipientIdCompoundUniqueInput = {
    fileId: string
    recipientId: string
  }

  export type FileShareCountOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
  }

  export type FileShareMaxOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
  }

  export type FileShareMinOrderByAggregateInput = {
    id?: SortOrder
    fileId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
  }

  export type StoredFileCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StoredFileCreateWithoutOwnerInput, StoredFileUncheckedCreateWithoutOwnerInput> | StoredFileCreateWithoutOwnerInput[] | StoredFileUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoredFileCreateOrConnectWithoutOwnerInput | StoredFileCreateOrConnectWithoutOwnerInput[]
    createMany?: StoredFileCreateManyOwnerInputEnvelope
    connect?: StoredFileWhereUniqueInput | StoredFileWhereUniqueInput[]
  }

  export type FileShareCreateNestedManyWithoutRecipientInput = {
    create?: XOR<FileShareCreateWithoutRecipientInput, FileShareUncheckedCreateWithoutRecipientInput> | FileShareCreateWithoutRecipientInput[] | FileShareUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: FileShareCreateOrConnectWithoutRecipientInput | FileShareCreateOrConnectWithoutRecipientInput[]
    createMany?: FileShareCreateManyRecipientInputEnvelope
    connect?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
  }

  export type StoredFileUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StoredFileCreateWithoutOwnerInput, StoredFileUncheckedCreateWithoutOwnerInput> | StoredFileCreateWithoutOwnerInput[] | StoredFileUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoredFileCreateOrConnectWithoutOwnerInput | StoredFileCreateOrConnectWithoutOwnerInput[]
    createMany?: StoredFileCreateManyOwnerInputEnvelope
    connect?: StoredFileWhereUniqueInput | StoredFileWhereUniqueInput[]
  }

  export type FileShareUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<FileShareCreateWithoutRecipientInput, FileShareUncheckedCreateWithoutRecipientInput> | FileShareCreateWithoutRecipientInput[] | FileShareUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: FileShareCreateOrConnectWithoutRecipientInput | FileShareCreateOrConnectWithoutRecipientInput[]
    createMany?: FileShareCreateManyRecipientInputEnvelope
    connect?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StoredFileUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StoredFileCreateWithoutOwnerInput, StoredFileUncheckedCreateWithoutOwnerInput> | StoredFileCreateWithoutOwnerInput[] | StoredFileUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoredFileCreateOrConnectWithoutOwnerInput | StoredFileCreateOrConnectWithoutOwnerInput[]
    upsert?: StoredFileUpsertWithWhereUniqueWithoutOwnerInput | StoredFileUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StoredFileCreateManyOwnerInputEnvelope
    set?: StoredFileWhereUniqueInput | StoredFileWhereUniqueInput[]
    disconnect?: StoredFileWhereUniqueInput | StoredFileWhereUniqueInput[]
    delete?: StoredFileWhereUniqueInput | StoredFileWhereUniqueInput[]
    connect?: StoredFileWhereUniqueInput | StoredFileWhereUniqueInput[]
    update?: StoredFileUpdateWithWhereUniqueWithoutOwnerInput | StoredFileUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StoredFileUpdateManyWithWhereWithoutOwnerInput | StoredFileUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StoredFileScalarWhereInput | StoredFileScalarWhereInput[]
  }

  export type FileShareUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<FileShareCreateWithoutRecipientInput, FileShareUncheckedCreateWithoutRecipientInput> | FileShareCreateWithoutRecipientInput[] | FileShareUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: FileShareCreateOrConnectWithoutRecipientInput | FileShareCreateOrConnectWithoutRecipientInput[]
    upsert?: FileShareUpsertWithWhereUniqueWithoutRecipientInput | FileShareUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: FileShareCreateManyRecipientInputEnvelope
    set?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    disconnect?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    delete?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    connect?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    update?: FileShareUpdateWithWhereUniqueWithoutRecipientInput | FileShareUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: FileShareUpdateManyWithWhereWithoutRecipientInput | FileShareUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: FileShareScalarWhereInput | FileShareScalarWhereInput[]
  }

  export type StoredFileUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StoredFileCreateWithoutOwnerInput, StoredFileUncheckedCreateWithoutOwnerInput> | StoredFileCreateWithoutOwnerInput[] | StoredFileUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoredFileCreateOrConnectWithoutOwnerInput | StoredFileCreateOrConnectWithoutOwnerInput[]
    upsert?: StoredFileUpsertWithWhereUniqueWithoutOwnerInput | StoredFileUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StoredFileCreateManyOwnerInputEnvelope
    set?: StoredFileWhereUniqueInput | StoredFileWhereUniqueInput[]
    disconnect?: StoredFileWhereUniqueInput | StoredFileWhereUniqueInput[]
    delete?: StoredFileWhereUniqueInput | StoredFileWhereUniqueInput[]
    connect?: StoredFileWhereUniqueInput | StoredFileWhereUniqueInput[]
    update?: StoredFileUpdateWithWhereUniqueWithoutOwnerInput | StoredFileUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StoredFileUpdateManyWithWhereWithoutOwnerInput | StoredFileUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StoredFileScalarWhereInput | StoredFileScalarWhereInput[]
  }

  export type FileShareUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<FileShareCreateWithoutRecipientInput, FileShareUncheckedCreateWithoutRecipientInput> | FileShareCreateWithoutRecipientInput[] | FileShareUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: FileShareCreateOrConnectWithoutRecipientInput | FileShareCreateOrConnectWithoutRecipientInput[]
    upsert?: FileShareUpsertWithWhereUniqueWithoutRecipientInput | FileShareUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: FileShareCreateManyRecipientInputEnvelope
    set?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    disconnect?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    delete?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    connect?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    update?: FileShareUpdateWithWhereUniqueWithoutRecipientInput | FileShareUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: FileShareUpdateManyWithWhereWithoutRecipientInput | FileShareUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: FileShareScalarWhereInput | FileShareScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    connect?: UserWhereUniqueInput
  }

  export type FileShareCreateNestedManyWithoutFileInput = {
    create?: XOR<FileShareCreateWithoutFileInput, FileShareUncheckedCreateWithoutFileInput> | FileShareCreateWithoutFileInput[] | FileShareUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileShareCreateOrConnectWithoutFileInput | FileShareCreateOrConnectWithoutFileInput[]
    createMany?: FileShareCreateManyFileInputEnvelope
    connect?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
  }

  export type FileShareUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<FileShareCreateWithoutFileInput, FileShareUncheckedCreateWithoutFileInput> | FileShareCreateWithoutFileInput[] | FileShareUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileShareCreateOrConnectWithoutFileInput | FileShareCreateOrConnectWithoutFileInput[]
    createMany?: FileShareCreateManyFileInputEnvelope
    connect?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    upsert?: UserUpsertWithoutFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFilesInput, UserUpdateWithoutFilesInput>, UserUncheckedUpdateWithoutFilesInput>
  }

  export type FileShareUpdateManyWithoutFileNestedInput = {
    create?: XOR<FileShareCreateWithoutFileInput, FileShareUncheckedCreateWithoutFileInput> | FileShareCreateWithoutFileInput[] | FileShareUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileShareCreateOrConnectWithoutFileInput | FileShareCreateOrConnectWithoutFileInput[]
    upsert?: FileShareUpsertWithWhereUniqueWithoutFileInput | FileShareUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: FileShareCreateManyFileInputEnvelope
    set?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    disconnect?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    delete?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    connect?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    update?: FileShareUpdateWithWhereUniqueWithoutFileInput | FileShareUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: FileShareUpdateManyWithWhereWithoutFileInput | FileShareUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: FileShareScalarWhereInput | FileShareScalarWhereInput[]
  }

  export type FileShareUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<FileShareCreateWithoutFileInput, FileShareUncheckedCreateWithoutFileInput> | FileShareCreateWithoutFileInput[] | FileShareUncheckedCreateWithoutFileInput[]
    connectOrCreate?: FileShareCreateOrConnectWithoutFileInput | FileShareCreateOrConnectWithoutFileInput[]
    upsert?: FileShareUpsertWithWhereUniqueWithoutFileInput | FileShareUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: FileShareCreateManyFileInputEnvelope
    set?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    disconnect?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    delete?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    connect?: FileShareWhereUniqueInput | FileShareWhereUniqueInput[]
    update?: FileShareUpdateWithWhereUniqueWithoutFileInput | FileShareUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: FileShareUpdateManyWithWhereWithoutFileInput | FileShareUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: FileShareScalarWhereInput | FileShareScalarWhereInput[]
  }

  export type StoredFileCreateNestedOneWithoutSharesInput = {
    create?: XOR<StoredFileCreateWithoutSharesInput, StoredFileUncheckedCreateWithoutSharesInput>
    connectOrCreate?: StoredFileCreateOrConnectWithoutSharesInput
    connect?: StoredFileWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSharesReceivedInput = {
    create?: XOR<UserCreateWithoutSharesReceivedInput, UserUncheckedCreateWithoutSharesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type StoredFileUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<StoredFileCreateWithoutSharesInput, StoredFileUncheckedCreateWithoutSharesInput>
    connectOrCreate?: StoredFileCreateOrConnectWithoutSharesInput
    upsert?: StoredFileUpsertWithoutSharesInput
    connect?: StoredFileWhereUniqueInput
    update?: XOR<XOR<StoredFileUpdateToOneWithWhereWithoutSharesInput, StoredFileUpdateWithoutSharesInput>, StoredFileUncheckedUpdateWithoutSharesInput>
  }

  export type UserUpdateOneRequiredWithoutSharesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutSharesReceivedInput, UserUncheckedCreateWithoutSharesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharesReceivedInput
    upsert?: UserUpsertWithoutSharesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharesReceivedInput, UserUpdateWithoutSharesReceivedInput>, UserUncheckedUpdateWithoutSharesReceivedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StoredFileCreateWithoutOwnerInput = {
    id?: string
    originalName: string
    storageKey: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shares?: FileShareCreateNestedManyWithoutFileInput
  }

  export type StoredFileUncheckedCreateWithoutOwnerInput = {
    id?: string
    originalName: string
    storageKey: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shares?: FileShareUncheckedCreateNestedManyWithoutFileInput
  }

  export type StoredFileCreateOrConnectWithoutOwnerInput = {
    where: StoredFileWhereUniqueInput
    create: XOR<StoredFileCreateWithoutOwnerInput, StoredFileUncheckedCreateWithoutOwnerInput>
  }

  export type StoredFileCreateManyOwnerInputEnvelope = {
    data: StoredFileCreateManyOwnerInput | StoredFileCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type FileShareCreateWithoutRecipientInput = {
    id?: string
    createdAt?: Date | string
    file: StoredFileCreateNestedOneWithoutSharesInput
  }

  export type FileShareUncheckedCreateWithoutRecipientInput = {
    id?: string
    fileId: string
    createdAt?: Date | string
  }

  export type FileShareCreateOrConnectWithoutRecipientInput = {
    where: FileShareWhereUniqueInput
    create: XOR<FileShareCreateWithoutRecipientInput, FileShareUncheckedCreateWithoutRecipientInput>
  }

  export type FileShareCreateManyRecipientInputEnvelope = {
    data: FileShareCreateManyRecipientInput | FileShareCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type StoredFileUpsertWithWhereUniqueWithoutOwnerInput = {
    where: StoredFileWhereUniqueInput
    update: XOR<StoredFileUpdateWithoutOwnerInput, StoredFileUncheckedUpdateWithoutOwnerInput>
    create: XOR<StoredFileCreateWithoutOwnerInput, StoredFileUncheckedCreateWithoutOwnerInput>
  }

  export type StoredFileUpdateWithWhereUniqueWithoutOwnerInput = {
    where: StoredFileWhereUniqueInput
    data: XOR<StoredFileUpdateWithoutOwnerInput, StoredFileUncheckedUpdateWithoutOwnerInput>
  }

  export type StoredFileUpdateManyWithWhereWithoutOwnerInput = {
    where: StoredFileScalarWhereInput
    data: XOR<StoredFileUpdateManyMutationInput, StoredFileUncheckedUpdateManyWithoutOwnerInput>
  }

  export type StoredFileScalarWhereInput = {
    AND?: StoredFileScalarWhereInput | StoredFileScalarWhereInput[]
    OR?: StoredFileScalarWhereInput[]
    NOT?: StoredFileScalarWhereInput | StoredFileScalarWhereInput[]
    id?: StringFilter<"StoredFile"> | string
    originalName?: StringFilter<"StoredFile"> | string
    storageKey?: StringFilter<"StoredFile"> | string
    mimeType?: StringFilter<"StoredFile"> | string
    sizeBytes?: IntFilter<"StoredFile"> | number
    ownerId?: StringFilter<"StoredFile"> | string
    createdAt?: DateTimeFilter<"StoredFile"> | Date | string
    updatedAt?: DateTimeFilter<"StoredFile"> | Date | string
  }

  export type FileShareUpsertWithWhereUniqueWithoutRecipientInput = {
    where: FileShareWhereUniqueInput
    update: XOR<FileShareUpdateWithoutRecipientInput, FileShareUncheckedUpdateWithoutRecipientInput>
    create: XOR<FileShareCreateWithoutRecipientInput, FileShareUncheckedCreateWithoutRecipientInput>
  }

  export type FileShareUpdateWithWhereUniqueWithoutRecipientInput = {
    where: FileShareWhereUniqueInput
    data: XOR<FileShareUpdateWithoutRecipientInput, FileShareUncheckedUpdateWithoutRecipientInput>
  }

  export type FileShareUpdateManyWithWhereWithoutRecipientInput = {
    where: FileShareScalarWhereInput
    data: XOR<FileShareUpdateManyMutationInput, FileShareUncheckedUpdateManyWithoutRecipientInput>
  }

  export type FileShareScalarWhereInput = {
    AND?: FileShareScalarWhereInput | FileShareScalarWhereInput[]
    OR?: FileShareScalarWhereInput[]
    NOT?: FileShareScalarWhereInput | FileShareScalarWhereInput[]
    id?: StringFilter<"FileShare"> | string
    fileId?: StringFilter<"FileShare"> | string
    recipientId?: StringFilter<"FileShare"> | string
    createdAt?: DateTimeFilter<"FileShare"> | Date | string
  }

  export type UserCreateWithoutFilesInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sharesReceived?: FileShareCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutFilesInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sharesReceived?: FileShareUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type FileShareCreateWithoutFileInput = {
    id?: string
    createdAt?: Date | string
    recipient: UserCreateNestedOneWithoutSharesReceivedInput
  }

  export type FileShareUncheckedCreateWithoutFileInput = {
    id?: string
    recipientId: string
    createdAt?: Date | string
  }

  export type FileShareCreateOrConnectWithoutFileInput = {
    where: FileShareWhereUniqueInput
    create: XOR<FileShareCreateWithoutFileInput, FileShareUncheckedCreateWithoutFileInput>
  }

  export type FileShareCreateManyFileInputEnvelope = {
    data: FileShareCreateManyFileInput | FileShareCreateManyFileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFilesInput = {
    update: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
  }

  export type UserUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sharesReceived?: FileShareUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sharesReceived?: FileShareUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type FileShareUpsertWithWhereUniqueWithoutFileInput = {
    where: FileShareWhereUniqueInput
    update: XOR<FileShareUpdateWithoutFileInput, FileShareUncheckedUpdateWithoutFileInput>
    create: XOR<FileShareCreateWithoutFileInput, FileShareUncheckedCreateWithoutFileInput>
  }

  export type FileShareUpdateWithWhereUniqueWithoutFileInput = {
    where: FileShareWhereUniqueInput
    data: XOR<FileShareUpdateWithoutFileInput, FileShareUncheckedUpdateWithoutFileInput>
  }

  export type FileShareUpdateManyWithWhereWithoutFileInput = {
    where: FileShareScalarWhereInput
    data: XOR<FileShareUpdateManyMutationInput, FileShareUncheckedUpdateManyWithoutFileInput>
  }

  export type StoredFileCreateWithoutSharesInput = {
    id?: string
    originalName: string
    storageKey: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutFilesInput
  }

  export type StoredFileUncheckedCreateWithoutSharesInput = {
    id?: string
    originalName: string
    storageKey: string
    mimeType: string
    sizeBytes: number
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoredFileCreateOrConnectWithoutSharesInput = {
    where: StoredFileWhereUniqueInput
    create: XOR<StoredFileCreateWithoutSharesInput, StoredFileUncheckedCreateWithoutSharesInput>
  }

  export type UserCreateWithoutSharesReceivedInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: StoredFileCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutSharesReceivedInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    files?: StoredFileUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutSharesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharesReceivedInput, UserUncheckedCreateWithoutSharesReceivedInput>
  }

  export type StoredFileUpsertWithoutSharesInput = {
    update: XOR<StoredFileUpdateWithoutSharesInput, StoredFileUncheckedUpdateWithoutSharesInput>
    create: XOR<StoredFileCreateWithoutSharesInput, StoredFileUncheckedCreateWithoutSharesInput>
    where?: StoredFileWhereInput
  }

  export type StoredFileUpdateToOneWithWhereWithoutSharesInput = {
    where?: StoredFileWhereInput
    data: XOR<StoredFileUpdateWithoutSharesInput, StoredFileUncheckedUpdateWithoutSharesInput>
  }

  export type StoredFileUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutFilesNestedInput
  }

  export type StoredFileUncheckedUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSharesReceivedInput = {
    update: XOR<UserUpdateWithoutSharesReceivedInput, UserUncheckedUpdateWithoutSharesReceivedInput>
    create: XOR<UserCreateWithoutSharesReceivedInput, UserUncheckedCreateWithoutSharesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharesReceivedInput, UserUncheckedUpdateWithoutSharesReceivedInput>
  }

  export type UserUpdateWithoutSharesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: StoredFileUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSharesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    files?: StoredFileUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type StoredFileCreateManyOwnerInput = {
    id?: string
    originalName: string
    storageKey: string
    mimeType: string
    sizeBytes: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileShareCreateManyRecipientInput = {
    id?: string
    fileId: string
    createdAt?: Date | string
  }

  export type StoredFileUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: FileShareUpdateManyWithoutFileNestedInput
  }

  export type StoredFileUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: FileShareUncheckedUpdateManyWithoutFileNestedInput
  }

  export type StoredFileUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileShareUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    file?: StoredFileUpdateOneRequiredWithoutSharesNestedInput
  }

  export type FileShareUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileShareUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileShareCreateManyFileInput = {
    id?: string
    recipientId: string
    createdAt?: Date | string
  }

  export type FileShareUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: UserUpdateOneRequiredWithoutSharesReceivedNestedInput
  }

  export type FileShareUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileShareUncheckedUpdateManyWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}