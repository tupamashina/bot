
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Project
 * 
 */
export type Project = {
  id: bigint
  name: string
  description: string
}

/**
 * Model Student
 * 
 */
export type Student = {
  id: bigint
  name: string
  group: string
  isApproved: boolean
  stars: number
  hearts: number
  tgChatId: bigint
  tgUserId: bigint
  tgUsername: string | null
  projectId: bigint | null
}

/**
 * Model Mentor
 * 
 */
export type Mentor = {
  id: bigint
  name: string
  isApproved: boolean
  tgChatId: bigint
  tgUserId: bigint
  tgUsername: string | null
  projectId: bigint | null
}

/**
 * Model Admin
 * 
 */
export type Admin = {
  id: bigint
  tgChatId: bigint
  tgUserId: bigint
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<GlobalReject>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<GlobalReject>;

  /**
   * `prisma.mentor`: Exposes CRUD operations for the **Mentor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mentors
    * const mentors = await prisma.mentor.findMany()
    * ```
    */
  get mentor(): Prisma.MentorDelegate<GlobalReject>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Extensions
   */
  export type Extension = runtime.Extension 

  /**
   * Prisma Client JS version: 4.5.0
   * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

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
      (Without<T, U> & U) | (Without<U, T> & T)
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Project: 'Project',
    Student: 'Student',
    Mentor: 'Mentor',
    Admin: 'Admin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */


  export type ProjectCountOutputType = {
    students: number
  }

  export type ProjectCountOutputTypeSelect = {
    students?: boolean
  }

  export type ProjectCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProjectCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProjectCountOutputType
    : S extends undefined
    ? never
    : S extends ProjectCountOutputTypeArgs
    ?'include' extends U
    ? ProjectCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProjectCountOutputType ? ProjectCountOutputType[P] : never
  } 
    : ProjectCountOutputType
  : ProjectCountOutputType




  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     * 
    **/
    select?: ProjectCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Project
   */


  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: bigint | null
  }

  export type ProjectMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type ProjectAggregateArgs = {
    /**
     * Filter which Project to aggregate.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs = {
    where?: ProjectWhereInput
    orderBy?: Enumerable<ProjectOrderByWithAggregationInput>
    by: Array<ProjectScalarFieldEnum>
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }


  export type ProjectGroupByOutputType = {
    id: bigint
    name: string
    description: string
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    mentor?: boolean | MentorArgs
    students?: boolean | StudentFindManyArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectInclude = {
    mentor?: boolean | MentorArgs
    students?: boolean | StudentFindManyArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectGetPayload<
    S extends boolean | null | undefined | ProjectArgs,
    U = keyof S
      > = S extends true
        ? Project
    : S extends undefined
    ? never
    : S extends ProjectArgs | ProjectFindManyArgs
    ?'include' extends U
    ? Project  & {
    [P in TrueKeys<S['include']>]:
        P extends 'mentor' ? MentorGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends 'students' ? Array < StudentGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'mentor' ? MentorGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'students' ? Array < StudentGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Project ? Project[P] : never
  } 
    : Project
  : Project


  type ProjectCountArgs = Merge<
    Omit<ProjectFindManyArgs, 'select' | 'include'> & {
      select?: ProjectCountAggregateInputType | true
    }
  >

  export interface ProjectDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null, null>, Prisma__ProjectClient<ProjectGetPayload<T> | null, null>>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null, null>, Prisma__ProjectClient<ProjectGetPayload<T> | null, null>>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs>(
      args?: SelectSubset<T, ProjectFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs>(
      args: SelectSubset<T, ProjectCreateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs>(
      args?: SelectSubset<T, ProjectCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs>(
      args: SelectSubset<T, ProjectDeleteArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs>(
      args: SelectSubset<T, ProjectUpdateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs>(
      args?: SelectSubset<T, ProjectDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs>(
      args: SelectSubset<T, ProjectUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs>(
      args: SelectSubset<T, ProjectUpsertArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Find one Project that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Find the first Project that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    mentor<T extends MentorArgs = {}>(args?: Subset<T, MentorArgs>): CheckSelect<T, Prisma__MentorClient<Mentor | Null>, Prisma__MentorClient<MentorGetPayload<T> | Null>>;

    students<T extends StudentFindManyArgs = {}>(args?: Subset<T, StudentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Student>| Null>, PrismaPromise<Array<StudentGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Project base type for findUnique actions
   */
  export type ProjectFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where: ProjectWhereUniqueInput
  }

  /**
   * Project: findUnique
   */
  export interface ProjectFindUniqueArgs extends ProjectFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Project base type for findFirst actions
   */
  export type ProjectFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     * 
    **/
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }

  /**
   * Project: findFirst
   */
  export interface ProjectFindFirstArgs extends ProjectFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Projects to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to create a Project.
     * 
    **/
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs = {
    /**
     * The data used to create many Projects.
     * 
    **/
    data: Enumerable<ProjectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to update a Project.
     * 
    **/
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs = {
    /**
     * The data used to update Projects.
     * 
    **/
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The filter to search for the Project to update in case it exists.
     * 
    **/
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     * 
    **/
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter which Project to delete.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs = {
    /**
     * Filter which Projects to delete
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project: findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs = ProjectFindUniqueArgsBase
      

  /**
   * Project: findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs = ProjectFindFirstArgsBase
      

  /**
   * Project without action
   */
  export type ProjectArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
  }



  /**
   * Model Student
   */


  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    stars: number | null
    hearts: number | null
    tgChatId: number | null
    tgUserId: number | null
    projectId: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: bigint | null
    stars: number | null
    hearts: number | null
    tgChatId: bigint | null
    tgUserId: bigint | null
    projectId: bigint | null
  }

  export type StudentMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    group: string | null
    isApproved: boolean | null
    stars: number | null
    hearts: number | null
    tgChatId: bigint | null
    tgUserId: bigint | null
    tgUsername: string | null
    projectId: bigint | null
  }

  export type StudentMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    group: string | null
    isApproved: boolean | null
    stars: number | null
    hearts: number | null
    tgChatId: bigint | null
    tgUserId: bigint | null
    tgUsername: string | null
    projectId: bigint | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    group: number
    isApproved: number
    stars: number
    hearts: number
    tgChatId: number
    tgUserId: number
    tgUsername: number
    projectId: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    stars?: true
    hearts?: true
    tgChatId?: true
    tgUserId?: true
    projectId?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    stars?: true
    hearts?: true
    tgChatId?: true
    tgUserId?: true
    projectId?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    group?: true
    isApproved?: true
    stars?: true
    hearts?: true
    tgChatId?: true
    tgUserId?: true
    tgUsername?: true
    projectId?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    group?: true
    isApproved?: true
    stars?: true
    hearts?: true
    tgChatId?: true
    tgUserId?: true
    tgUsername?: true
    projectId?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    group?: true
    isApproved?: true
    stars?: true
    hearts?: true
    tgChatId?: true
    tgUserId?: true
    tgUsername?: true
    projectId?: true
    _all?: true
  }

  export type StudentAggregateArgs = {
    /**
     * Filter which Student to aggregate.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs = {
    where?: StudentWhereInput
    orderBy?: Enumerable<StudentOrderByWithAggregationInput>
    by: Array<StudentScalarFieldEnum>
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }


  export type StudentGroupByOutputType = {
    id: bigint
    name: string
    group: string
    isApproved: boolean
    stars: number
    hearts: number
    tgChatId: bigint
    tgUserId: bigint
    tgUsername: string | null
    projectId: bigint | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect = {
    id?: boolean
    name?: boolean
    group?: boolean
    isApproved?: boolean
    stars?: boolean
    hearts?: boolean
    tgChatId?: boolean
    tgUserId?: boolean
    tgUsername?: boolean
    projectId?: boolean
    project?: boolean | ProjectArgs
  }

  export type StudentInclude = {
    project?: boolean | ProjectArgs
  }

  export type StudentGetPayload<
    S extends boolean | null | undefined | StudentArgs,
    U = keyof S
      > = S extends true
        ? Student
    : S extends undefined
    ? never
    : S extends StudentArgs | StudentFindManyArgs
    ?'include' extends U
    ? Student  & {
    [P in TrueKeys<S['include']>]:
        P extends 'project' ? ProjectGetPayload<Exclude<S['include'], undefined | null>[P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'project' ? ProjectGetPayload<Exclude<S['select'], undefined | null>[P]> | null :  P extends keyof Student ? Student[P] : never
  } 
    : Student
  : Student


  type StudentCountArgs = Merge<
    Omit<StudentFindManyArgs, 'select' | 'include'> & {
      select?: StudentCountAggregateInputType | true
    }
  >

  export interface StudentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StudentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Student'> extends True ? CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>> : CheckSelect<T, Prisma__StudentClient<Student | null, null>, Prisma__StudentClient<StudentGetPayload<T> | null, null>>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StudentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Student'> extends True ? CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>> : CheckSelect<T, Prisma__StudentClient<Student | null, null>, Prisma__StudentClient<StudentGetPayload<T> | null, null>>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentFindManyArgs>(
      args?: SelectSubset<T, StudentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Student>>, PrismaPromise<Array<StudentGetPayload<T>>>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends StudentCreateArgs>(
      args: SelectSubset<T, StudentCreateArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Create many Students.
     *     @param {StudentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentCreateManyArgs>(
      args?: SelectSubset<T, StudentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends StudentDeleteArgs>(
      args: SelectSubset<T, StudentDeleteArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentUpdateArgs>(
      args: SelectSubset<T, StudentUpdateArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentDeleteManyArgs>(
      args?: SelectSubset<T, StudentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentUpdateManyArgs>(
      args: SelectSubset<T, StudentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends StudentUpsertArgs>(
      args: SelectSubset<T, StudentUpsertArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Find one Student that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StudentFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Find the first Student that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudentClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | Null>, Prisma__ProjectClient<ProjectGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Student base type for findUnique actions
   */
  export type StudentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter, which Student to fetch.
     * 
    **/
    where: StudentWhereUniqueInput
  }

  /**
   * Student: findUnique
   */
  export interface StudentFindUniqueArgs extends StudentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Student base type for findFirst actions
   */
  export type StudentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter, which Student to fetch.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     * 
    **/
    distinct?: Enumerable<StudentScalarFieldEnum>
  }

  /**
   * Student: findFirst
   */
  export interface StudentFindFirstArgs extends StudentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Student findMany
   */
  export type StudentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter, which Students to fetch.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * Student create
   */
  export type StudentCreateArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The data needed to create a Student.
     * 
    **/
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }


  /**
   * Student createMany
   */
  export type StudentCreateManyArgs = {
    /**
     * The data used to create many Students.
     * 
    **/
    data: Enumerable<StudentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Student update
   */
  export type StudentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The data needed to update a Student.
     * 
    **/
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     * 
    **/
    where: StudentWhereUniqueInput
  }


  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs = {
    /**
     * The data used to update Students.
     * 
    **/
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     * 
    **/
    where?: StudentWhereInput
  }


  /**
   * Student upsert
   */
  export type StudentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The filter to search for the Student to update in case it exists.
     * 
    **/
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     * 
    **/
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }


  /**
   * Student delete
   */
  export type StudentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter which Student to delete.
     * 
    **/
    where: StudentWhereUniqueInput
  }


  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs = {
    /**
     * Filter which Students to delete
     * 
    **/
    where?: StudentWhereInput
  }


  /**
   * Student: findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs = StudentFindUniqueArgsBase
      

  /**
   * Student: findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs = StudentFindFirstArgsBase
      

  /**
   * Student without action
   */
  export type StudentArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
  }



  /**
   * Model Mentor
   */


  export type AggregateMentor = {
    _count: MentorCountAggregateOutputType | null
    _avg: MentorAvgAggregateOutputType | null
    _sum: MentorSumAggregateOutputType | null
    _min: MentorMinAggregateOutputType | null
    _max: MentorMaxAggregateOutputType | null
  }

  export type MentorAvgAggregateOutputType = {
    id: number | null
    tgChatId: number | null
    tgUserId: number | null
    projectId: number | null
  }

  export type MentorSumAggregateOutputType = {
    id: bigint | null
    tgChatId: bigint | null
    tgUserId: bigint | null
    projectId: bigint | null
  }

  export type MentorMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    isApproved: boolean | null
    tgChatId: bigint | null
    tgUserId: bigint | null
    tgUsername: string | null
    projectId: bigint | null
  }

  export type MentorMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    isApproved: boolean | null
    tgChatId: bigint | null
    tgUserId: bigint | null
    tgUsername: string | null
    projectId: bigint | null
  }

  export type MentorCountAggregateOutputType = {
    id: number
    name: number
    isApproved: number
    tgChatId: number
    tgUserId: number
    tgUsername: number
    projectId: number
    _all: number
  }


  export type MentorAvgAggregateInputType = {
    id?: true
    tgChatId?: true
    tgUserId?: true
    projectId?: true
  }

  export type MentorSumAggregateInputType = {
    id?: true
    tgChatId?: true
    tgUserId?: true
    projectId?: true
  }

  export type MentorMinAggregateInputType = {
    id?: true
    name?: true
    isApproved?: true
    tgChatId?: true
    tgUserId?: true
    tgUsername?: true
    projectId?: true
  }

  export type MentorMaxAggregateInputType = {
    id?: true
    name?: true
    isApproved?: true
    tgChatId?: true
    tgUserId?: true
    tgUsername?: true
    projectId?: true
  }

  export type MentorCountAggregateInputType = {
    id?: true
    name?: true
    isApproved?: true
    tgChatId?: true
    tgUserId?: true
    tgUsername?: true
    projectId?: true
    _all?: true
  }

  export type MentorAggregateArgs = {
    /**
     * Filter which Mentor to aggregate.
     * 
    **/
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     * 
    **/
    orderBy?: Enumerable<MentorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mentors
    **/
    _count?: true | MentorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorMaxAggregateInputType
  }

  export type GetMentorAggregateType<T extends MentorAggregateArgs> = {
        [P in keyof T & keyof AggregateMentor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentor[P]>
      : GetScalarType<T[P], AggregateMentor[P]>
  }




  export type MentorGroupByArgs = {
    where?: MentorWhereInput
    orderBy?: Enumerable<MentorOrderByWithAggregationInput>
    by: Array<MentorScalarFieldEnum>
    having?: MentorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorCountAggregateInputType | true
    _avg?: MentorAvgAggregateInputType
    _sum?: MentorSumAggregateInputType
    _min?: MentorMinAggregateInputType
    _max?: MentorMaxAggregateInputType
  }


  export type MentorGroupByOutputType = {
    id: bigint
    name: string
    isApproved: boolean
    tgChatId: bigint
    tgUserId: bigint
    tgUsername: string | null
    projectId: bigint | null
    _count: MentorCountAggregateOutputType | null
    _avg: MentorAvgAggregateOutputType | null
    _sum: MentorSumAggregateOutputType | null
    _min: MentorMinAggregateOutputType | null
    _max: MentorMaxAggregateOutputType | null
  }

  type GetMentorGroupByPayload<T extends MentorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MentorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorGroupByOutputType[P]>
            : GetScalarType<T[P], MentorGroupByOutputType[P]>
        }
      >
    >


  export type MentorSelect = {
    id?: boolean
    name?: boolean
    isApproved?: boolean
    tgChatId?: boolean
    tgUserId?: boolean
    tgUsername?: boolean
    projectId?: boolean
    project?: boolean | ProjectArgs
  }

  export type MentorInclude = {
    project?: boolean | ProjectArgs
  }

  export type MentorGetPayload<
    S extends boolean | null | undefined | MentorArgs,
    U = keyof S
      > = S extends true
        ? Mentor
    : S extends undefined
    ? never
    : S extends MentorArgs | MentorFindManyArgs
    ?'include' extends U
    ? Mentor  & {
    [P in TrueKeys<S['include']>]:
        P extends 'project' ? ProjectGetPayload<Exclude<S['include'], undefined | null>[P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'project' ? ProjectGetPayload<Exclude<S['select'], undefined | null>[P]> | null :  P extends keyof Mentor ? Mentor[P] : never
  } 
    : Mentor
  : Mentor


  type MentorCountArgs = Merge<
    Omit<MentorFindManyArgs, 'select' | 'include'> & {
      select?: MentorCountAggregateInputType | true
    }
  >

  export interface MentorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Mentor that matches the filter.
     * @param {MentorFindUniqueArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MentorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MentorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mentor'> extends True ? CheckSelect<T, Prisma__MentorClient<Mentor>, Prisma__MentorClient<MentorGetPayload<T>>> : CheckSelect<T, Prisma__MentorClient<Mentor | null, null>, Prisma__MentorClient<MentorGetPayload<T> | null, null>>

    /**
     * Find the first Mentor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindFirstArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MentorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MentorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mentor'> extends True ? CheckSelect<T, Prisma__MentorClient<Mentor>, Prisma__MentorClient<MentorGetPayload<T>>> : CheckSelect<T, Prisma__MentorClient<Mentor | null, null>, Prisma__MentorClient<MentorGetPayload<T> | null, null>>

    /**
     * Find zero or more Mentors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mentors
     * const mentors = await prisma.mentor.findMany()
     * 
     * // Get first 10 Mentors
     * const mentors = await prisma.mentor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentorWithIdOnly = await prisma.mentor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MentorFindManyArgs>(
      args?: SelectSubset<T, MentorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mentor>>, PrismaPromise<Array<MentorGetPayload<T>>>>

    /**
     * Create a Mentor.
     * @param {MentorCreateArgs} args - Arguments to create a Mentor.
     * @example
     * // Create one Mentor
     * const Mentor = await prisma.mentor.create({
     *   data: {
     *     // ... data to create a Mentor
     *   }
     * })
     * 
    **/
    create<T extends MentorCreateArgs>(
      args: SelectSubset<T, MentorCreateArgs>
    ): CheckSelect<T, Prisma__MentorClient<Mentor>, Prisma__MentorClient<MentorGetPayload<T>>>

    /**
     * Create many Mentors.
     *     @param {MentorCreateManyArgs} args - Arguments to create many Mentors.
     *     @example
     *     // Create many Mentors
     *     const mentor = await prisma.mentor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MentorCreateManyArgs>(
      args?: SelectSubset<T, MentorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mentor.
     * @param {MentorDeleteArgs} args - Arguments to delete one Mentor.
     * @example
     * // Delete one Mentor
     * const Mentor = await prisma.mentor.delete({
     *   where: {
     *     // ... filter to delete one Mentor
     *   }
     * })
     * 
    **/
    delete<T extends MentorDeleteArgs>(
      args: SelectSubset<T, MentorDeleteArgs>
    ): CheckSelect<T, Prisma__MentorClient<Mentor>, Prisma__MentorClient<MentorGetPayload<T>>>

    /**
     * Update one Mentor.
     * @param {MentorUpdateArgs} args - Arguments to update one Mentor.
     * @example
     * // Update one Mentor
     * const mentor = await prisma.mentor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MentorUpdateArgs>(
      args: SelectSubset<T, MentorUpdateArgs>
    ): CheckSelect<T, Prisma__MentorClient<Mentor>, Prisma__MentorClient<MentorGetPayload<T>>>

    /**
     * Delete zero or more Mentors.
     * @param {MentorDeleteManyArgs} args - Arguments to filter Mentors to delete.
     * @example
     * // Delete a few Mentors
     * const { count } = await prisma.mentor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MentorDeleteManyArgs>(
      args?: SelectSubset<T, MentorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mentors
     * const mentor = await prisma.mentor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MentorUpdateManyArgs>(
      args: SelectSubset<T, MentorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mentor.
     * @param {MentorUpsertArgs} args - Arguments to update or create a Mentor.
     * @example
     * // Update or create a Mentor
     * const mentor = await prisma.mentor.upsert({
     *   create: {
     *     // ... data to create a Mentor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mentor we want to update
     *   }
     * })
    **/
    upsert<T extends MentorUpsertArgs>(
      args: SelectSubset<T, MentorUpsertArgs>
    ): CheckSelect<T, Prisma__MentorClient<Mentor>, Prisma__MentorClient<MentorGetPayload<T>>>

    /**
     * Find one Mentor that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MentorFindUniqueOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MentorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MentorFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MentorClient<Mentor>, Prisma__MentorClient<MentorGetPayload<T>>>

    /**
     * Find the first Mentor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorFindFirstOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MentorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MentorFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MentorClient<Mentor>, Prisma__MentorClient<MentorGetPayload<T>>>

    /**
     * Count the number of Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorCountArgs} args - Arguments to filter Mentors to count.
     * @example
     * // Count the number of Mentors
     * const count = await prisma.mentor.count({
     *   where: {
     *     // ... the filter for the Mentors we want to count
     *   }
     * })
    **/
    count<T extends MentorCountArgs>(
      args?: Subset<T, MentorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MentorAggregateArgs>(args: Subset<T, MentorAggregateArgs>): PrismaPromise<GetMentorAggregateType<T>>

    /**
     * Group by Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorGroupByArgs} args - Group by arguments.
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
      T extends MentorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentorGroupByArgs['orderBy'] }
        : { orderBy?: MentorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MentorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Mentor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MentorClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    project<T extends ProjectArgs = {}>(args?: Subset<T, ProjectArgs>): CheckSelect<T, Prisma__ProjectClient<Project | Null>, Prisma__ProjectClient<ProjectGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Mentor base type for findUnique actions
   */
  export type MentorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Mentor
     * 
    **/
    select?: MentorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentorInclude | null
    /**
     * Filter, which Mentor to fetch.
     * 
    **/
    where: MentorWhereUniqueInput
  }

  /**
   * Mentor: findUnique
   */
  export interface MentorFindUniqueArgs extends MentorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Mentor base type for findFirst actions
   */
  export type MentorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Mentor
     * 
    **/
    select?: MentorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentorInclude | null
    /**
     * Filter, which Mentor to fetch.
     * 
    **/
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     * 
    **/
    orderBy?: Enumerable<MentorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mentors.
     * 
    **/
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mentors.
     * 
    **/
    distinct?: Enumerable<MentorScalarFieldEnum>
  }

  /**
   * Mentor: findFirst
   */
  export interface MentorFindFirstArgs extends MentorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Mentor findMany
   */
  export type MentorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mentor
     * 
    **/
    select?: MentorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentorInclude | null
    /**
     * Filter, which Mentors to fetch.
     * 
    **/
    where?: MentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentors to fetch.
     * 
    **/
    orderBy?: Enumerable<MentorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mentors.
     * 
    **/
    cursor?: MentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MentorScalarFieldEnum>
  }


  /**
   * Mentor create
   */
  export type MentorCreateArgs = {
    /**
     * Select specific fields to fetch from the Mentor
     * 
    **/
    select?: MentorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentorInclude | null
    /**
     * The data needed to create a Mentor.
     * 
    **/
    data: XOR<MentorCreateInput, MentorUncheckedCreateInput>
  }


  /**
   * Mentor createMany
   */
  export type MentorCreateManyArgs = {
    /**
     * The data used to create many Mentors.
     * 
    **/
    data: Enumerable<MentorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mentor update
   */
  export type MentorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mentor
     * 
    **/
    select?: MentorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentorInclude | null
    /**
     * The data needed to update a Mentor.
     * 
    **/
    data: XOR<MentorUpdateInput, MentorUncheckedUpdateInput>
    /**
     * Choose, which Mentor to update.
     * 
    **/
    where: MentorWhereUniqueInput
  }


  /**
   * Mentor updateMany
   */
  export type MentorUpdateManyArgs = {
    /**
     * The data used to update Mentors.
     * 
    **/
    data: XOR<MentorUpdateManyMutationInput, MentorUncheckedUpdateManyInput>
    /**
     * Filter which Mentors to update
     * 
    **/
    where?: MentorWhereInput
  }


  /**
   * Mentor upsert
   */
  export type MentorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mentor
     * 
    **/
    select?: MentorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentorInclude | null
    /**
     * The filter to search for the Mentor to update in case it exists.
     * 
    **/
    where: MentorWhereUniqueInput
    /**
     * In case the Mentor found by the `where` argument doesn't exist, create a new Mentor with this data.
     * 
    **/
    create: XOR<MentorCreateInput, MentorUncheckedCreateInput>
    /**
     * In case the Mentor was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MentorUpdateInput, MentorUncheckedUpdateInput>
  }


  /**
   * Mentor delete
   */
  export type MentorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mentor
     * 
    **/
    select?: MentorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentorInclude | null
    /**
     * Filter which Mentor to delete.
     * 
    **/
    where: MentorWhereUniqueInput
  }


  /**
   * Mentor deleteMany
   */
  export type MentorDeleteManyArgs = {
    /**
     * Filter which Mentors to delete
     * 
    **/
    where?: MentorWhereInput
  }


  /**
   * Mentor: findUniqueOrThrow
   */
  export type MentorFindUniqueOrThrowArgs = MentorFindUniqueArgsBase
      

  /**
   * Mentor: findFirstOrThrow
   */
  export type MentorFindFirstOrThrowArgs = MentorFindFirstArgsBase
      

  /**
   * Mentor without action
   */
  export type MentorArgs = {
    /**
     * Select specific fields to fetch from the Mentor
     * 
    **/
    select?: MentorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentorInclude | null
  }



  /**
   * Model Admin
   */


  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    tgChatId: number | null
    tgUserId: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: bigint | null
    tgChatId: bigint | null
    tgUserId: bigint | null
  }

  export type AdminMinAggregateOutputType = {
    id: bigint | null
    tgChatId: bigint | null
    tgUserId: bigint | null
  }

  export type AdminMaxAggregateOutputType = {
    id: bigint | null
    tgChatId: bigint | null
    tgUserId: bigint | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    tgChatId: number
    tgUserId: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    tgChatId?: true
    tgUserId?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    tgChatId?: true
    tgUserId?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    tgChatId?: true
    tgUserId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    tgChatId?: true
    tgUserId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    tgChatId?: true
    tgUserId?: true
    _all?: true
  }

  export type AdminAggregateArgs = {
    /**
     * Filter which Admin to aggregate.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs = {
    where?: AdminWhereInput
    orderBy?: Enumerable<AdminOrderByWithAggregationInput>
    by: Array<AdminScalarFieldEnum>
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }


  export type AdminGroupByOutputType = {
    id: bigint
    tgChatId: bigint
    tgUserId: bigint
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect = {
    id?: boolean
    tgChatId?: boolean
    tgUserId?: boolean
  }

  export type AdminGetPayload<
    S extends boolean | null | undefined | AdminArgs,
    U = keyof S
      > = S extends true
        ? Admin
    : S extends undefined
    ? never
    : S extends AdminArgs | AdminFindManyArgs
    ?'include' extends U
    ? Admin 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Admin ? Admin[P] : never
  } 
    : Admin
  : Admin


  type AdminCountArgs = Merge<
    Omit<AdminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }
  >

  export interface AdminDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdminFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Admin'> extends True ? CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>> : CheckSelect<T, Prisma__AdminClient<Admin | null, null>, Prisma__AdminClient<AdminGetPayload<T> | null, null>>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdminFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Admin'> extends True ? CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>> : CheckSelect<T, Prisma__AdminClient<Admin | null, null>, Prisma__AdminClient<AdminGetPayload<T> | null, null>>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs>(
      args?: SelectSubset<T, AdminFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Admin>>, PrismaPromise<Array<AdminGetPayload<T>>>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs>(
      args: SelectSubset<T, AdminCreateArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs>(
      args?: SelectSubset<T, AdminCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs>(
      args: SelectSubset<T, AdminDeleteArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs>(
      args: SelectSubset<T, AdminUpdateArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs>(
      args?: SelectSubset<T, AdminDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs>(
      args: SelectSubset<T, AdminUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs>(
      args: SelectSubset<T, AdminUpsertArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Find one Admin that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Find the first Admin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdminClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Admin base type for findUnique actions
   */
  export type AdminFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where: AdminWhereUniqueInput
  }

  /**
   * Admin: findUnique
   */
  export interface AdminFindUniqueArgs extends AdminFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin base type for findFirst actions
   */
  export type AdminFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     * 
    **/
    distinct?: Enumerable<AdminScalarFieldEnum>
  }

  /**
   * Admin: findFirst
   */
  export interface AdminFindFirstArgs extends AdminFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter, which Admins to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The data needed to create a Admin.
     * 
    **/
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs = {
    /**
     * The data used to create many Admins.
     * 
    **/
    data: Enumerable<AdminCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The data needed to update a Admin.
     * 
    **/
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs = {
    /**
     * The data used to update Admins.
     * 
    **/
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     * 
    **/
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The filter to search for the Admin to update in case it exists.
     * 
    **/
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     * 
    **/
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter which Admin to delete.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs = {
    /**
     * Filter which Admins to delete
     * 
    **/
    where?: AdminWhereInput
  }


  /**
   * Admin: findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs = AdminFindUniqueArgsBase
      

  /**
   * Admin: findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs = AdminFindFirstArgsBase
      

  /**
   * Admin without action
   */
  export type AdminArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AdminScalarFieldEnum: {
    id: 'id',
    tgChatId: 'tgChatId',
    tgUserId: 'tgUserId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const MentorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isApproved: 'isApproved',
    tgChatId: 'tgChatId',
    tgUserId: 'tgUserId',
    tgUsername: 'tgUsername',
    projectId: 'projectId'
  };

  export type MentorScalarFieldEnum = (typeof MentorScalarFieldEnum)[keyof typeof MentorScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    group: 'group',
    isApproved: 'isApproved',
    stars: 'stars',
    hearts: 'hearts',
    tgChatId: 'tgChatId',
    tgUserId: 'tgUserId',
    tgUsername: 'tgUsername',
    projectId: 'projectId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: Enumerable<ProjectWhereInput>
    OR?: Enumerable<ProjectWhereInput>
    NOT?: Enumerable<ProjectWhereInput>
    id?: BigIntFilter | bigint | number
    name?: StringFilter | string
    description?: StringFilter | string
    mentor?: XOR<MentorRelationFilter, MentorWhereInput> | null
    students?: StudentListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mentor?: MentorOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = {
    id?: bigint | number
  }

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
  }

  export type StudentWhereInput = {
    AND?: Enumerable<StudentWhereInput>
    OR?: Enumerable<StudentWhereInput>
    NOT?: Enumerable<StudentWhereInput>
    id?: BigIntFilter | bigint | number
    name?: StringFilter | string
    group?: StringFilter | string
    isApproved?: BoolFilter | boolean
    stars?: IntFilter | number
    hearts?: IntFilter | number
    tgChatId?: BigIntFilter | bigint | number
    tgUserId?: BigIntFilter | bigint | number
    tgUsername?: StringNullableFilter | string | null
    projectId?: BigIntNullableFilter | bigint | number | null
    project?: XOR<ProjectRelationFilter, ProjectWhereInput> | null
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
    isApproved?: SortOrder
    stars?: SortOrder
    hearts?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    tgUsername?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = {
    id?: bigint | number
    tgChatId?: bigint | number
    tgUserId?: bigint | number
    tgUsername?: string
  }

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
    isApproved?: SortOrder
    stars?: SortOrder
    hearts?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    tgUsername?: SortOrder
    projectId?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StudentScalarWhereWithAggregatesInput>
    OR?: Enumerable<StudentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StudentScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    name?: StringWithAggregatesFilter | string
    group?: StringWithAggregatesFilter | string
    isApproved?: BoolWithAggregatesFilter | boolean
    stars?: IntWithAggregatesFilter | number
    hearts?: IntWithAggregatesFilter | number
    tgChatId?: BigIntWithAggregatesFilter | bigint | number
    tgUserId?: BigIntWithAggregatesFilter | bigint | number
    tgUsername?: StringNullableWithAggregatesFilter | string | null
    projectId?: BigIntNullableWithAggregatesFilter | bigint | number | null
  }

  export type MentorWhereInput = {
    AND?: Enumerable<MentorWhereInput>
    OR?: Enumerable<MentorWhereInput>
    NOT?: Enumerable<MentorWhereInput>
    id?: BigIntFilter | bigint | number
    name?: StringFilter | string
    isApproved?: BoolFilter | boolean
    tgChatId?: BigIntFilter | bigint | number
    tgUserId?: BigIntFilter | bigint | number
    tgUsername?: StringNullableFilter | string | null
    projectId?: BigIntNullableFilter | bigint | number | null
    project?: XOR<ProjectRelationFilter, ProjectWhereInput> | null
  }

  export type MentorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isApproved?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    tgUsername?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type MentorWhereUniqueInput = {
    id?: bigint | number
    tgChatId?: bigint | number
    tgUserId?: bigint | number
    tgUsername?: string
    projectId?: bigint | number
  }

  export type MentorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isApproved?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    tgUsername?: SortOrder
    projectId?: SortOrder
    _count?: MentorCountOrderByAggregateInput
    _avg?: MentorAvgOrderByAggregateInput
    _max?: MentorMaxOrderByAggregateInput
    _min?: MentorMinOrderByAggregateInput
    _sum?: MentorSumOrderByAggregateInput
  }

  export type MentorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MentorScalarWhereWithAggregatesInput>
    OR?: Enumerable<MentorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MentorScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    name?: StringWithAggregatesFilter | string
    isApproved?: BoolWithAggregatesFilter | boolean
    tgChatId?: BigIntWithAggregatesFilter | bigint | number
    tgUserId?: BigIntWithAggregatesFilter | bigint | number
    tgUsername?: StringNullableWithAggregatesFilter | string | null
    projectId?: BigIntNullableWithAggregatesFilter | bigint | number | null
  }

  export type AdminWhereInput = {
    AND?: Enumerable<AdminWhereInput>
    OR?: Enumerable<AdminWhereInput>
    NOT?: Enumerable<AdminWhereInput>
    id?: BigIntFilter | bigint | number
    tgChatId?: BigIntFilter | bigint | number
    tgUserId?: BigIntFilter | bigint | number
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
  }

  export type AdminWhereUniqueInput = {
    id?: bigint | number
    tgChatId?: bigint | number
    tgUserId?: bigint | number
  }

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdminScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdminScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    tgChatId?: BigIntWithAggregatesFilter | bigint | number
    tgUserId?: BigIntWithAggregatesFilter | bigint | number
  }

  export type ProjectCreateInput = {
    id?: bigint | number
    name: string
    description: string
    mentor?: MentorCreateNestedOneWithoutProjectInput
    students?: StudentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description: string
    mentor?: MentorUncheckedCreateNestedOneWithoutProjectInput
    students?: StudentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mentor?: MentorUpdateOneWithoutProjectNestedInput
    students?: StudentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mentor?: MentorUncheckedUpdateOneWithoutProjectNestedInput
    students?: StudentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: bigint | number
    name: string
    description: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateInput = {
    id?: bigint | number
    name: string
    group: string
    isApproved?: boolean
    stars?: number
    hearts?: number
    tgChatId: bigint | number
    tgUserId: bigint | number
    tgUsername?: string | null
    project?: ProjectCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    id?: bigint | number
    name: string
    group: string
    isApproved?: boolean
    stars?: number
    hearts?: number
    tgChatId: bigint | number
    tgUserId: bigint | number
    tgUsername?: string | null
    projectId?: bigint | number | null
  }

  export type StudentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    stars?: IntFieldUpdateOperationsInput | number
    hearts?: IntFieldUpdateOperationsInput | number
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    stars?: IntFieldUpdateOperationsInput | number
    hearts?: IntFieldUpdateOperationsInput | number
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type StudentCreateManyInput = {
    id?: bigint | number
    name: string
    group: string
    isApproved?: boolean
    stars?: number
    hearts?: number
    tgChatId: bigint | number
    tgUserId: bigint | number
    tgUsername?: string | null
    projectId?: bigint | number | null
  }

  export type StudentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    stars?: IntFieldUpdateOperationsInput | number
    hearts?: IntFieldUpdateOperationsInput | number
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    stars?: IntFieldUpdateOperationsInput | number
    hearts?: IntFieldUpdateOperationsInput | number
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type MentorCreateInput = {
    id?: bigint | number
    name: string
    isApproved?: boolean
    tgChatId: bigint | number
    tgUserId: bigint | number
    tgUsername?: string | null
    project?: ProjectCreateNestedOneWithoutMentorInput
  }

  export type MentorUncheckedCreateInput = {
    id?: bigint | number
    name: string
    isApproved?: boolean
    tgChatId: bigint | number
    tgUserId: bigint | number
    tgUsername?: string | null
    projectId?: bigint | number | null
  }

  export type MentorUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneWithoutMentorNestedInput
  }

  export type MentorUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type MentorCreateManyInput = {
    id?: bigint | number
    name: string
    isApproved?: boolean
    tgChatId: bigint | number
    tgUserId: bigint | number
    tgUsername?: string | null
    projectId?: bigint | number | null
  }

  export type MentorUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MentorUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type AdminCreateInput = {
    id?: bigint | number
    tgChatId: bigint | number
    tgUserId: bigint | number
  }

  export type AdminUncheckedCreateInput = {
    id?: bigint | number
    tgChatId: bigint | number
    tgUserId: bigint | number
  }

  export type AdminUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AdminUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AdminCreateManyInput = {
    id?: bigint | number
    tgChatId: bigint | number
    tgUserId: bigint | number
  }

  export type AdminUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type MentorRelationFilter = {
    is?: MentorWhereInput | null
    isNot?: MentorWhereInput | null
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
    isApproved?: SortOrder
    stars?: SortOrder
    hearts?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    tgUsername?: SortOrder
    projectId?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    stars?: SortOrder
    hearts?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    projectId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
    isApproved?: SortOrder
    stars?: SortOrder
    hearts?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    tgUsername?: SortOrder
    projectId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    group?: SortOrder
    isApproved?: SortOrder
    stars?: SortOrder
    hearts?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    tgUsername?: SortOrder
    projectId?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    stars?: SortOrder
    hearts?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    projectId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type MentorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isApproved?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    tgUsername?: SortOrder
    projectId?: SortOrder
  }

  export type MentorAvgOrderByAggregateInput = {
    id?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    projectId?: SortOrder
  }

  export type MentorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isApproved?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    tgUsername?: SortOrder
    projectId?: SortOrder
  }

  export type MentorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isApproved?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    tgUsername?: SortOrder
    projectId?: SortOrder
  }

  export type MentorSumOrderByAggregateInput = {
    id?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
    projectId?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
    tgChatId?: SortOrder
    tgUserId?: SortOrder
  }

  export type MentorCreateNestedOneWithoutProjectInput = {
    create?: XOR<MentorCreateWithoutProjectInput, MentorUncheckedCreateWithoutProjectInput>
    connectOrCreate?: MentorCreateOrConnectWithoutProjectInput
    connect?: MentorWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<StudentCreateWithoutProjectInput>, Enumerable<StudentUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutProjectInput>
    createMany?: StudentCreateManyProjectInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type MentorUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<MentorCreateWithoutProjectInput, MentorUncheckedCreateWithoutProjectInput>
    connectOrCreate?: MentorCreateOrConnectWithoutProjectInput
    connect?: MentorWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<StudentCreateWithoutProjectInput>, Enumerable<StudentUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutProjectInput>
    createMany?: StudentCreateManyProjectInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MentorUpdateOneWithoutProjectNestedInput = {
    create?: XOR<MentorCreateWithoutProjectInput, MentorUncheckedCreateWithoutProjectInput>
    connectOrCreate?: MentorCreateOrConnectWithoutProjectInput
    upsert?: MentorUpsertWithoutProjectInput
    disconnect?: boolean
    delete?: boolean
    connect?: MentorWhereUniqueInput
    update?: XOR<MentorUpdateWithoutProjectInput, MentorUncheckedUpdateWithoutProjectInput>
  }

  export type StudentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutProjectInput>, Enumerable<StudentUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: StudentCreateManyProjectInputEnvelope
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type MentorUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<MentorCreateWithoutProjectInput, MentorUncheckedCreateWithoutProjectInput>
    connectOrCreate?: MentorCreateOrConnectWithoutProjectInput
    upsert?: MentorUpsertWithoutProjectInput
    disconnect?: boolean
    delete?: boolean
    connect?: MentorWhereUniqueInput
    update?: XOR<MentorUpdateWithoutProjectInput, MentorUncheckedUpdateWithoutProjectInput>
  }

  export type StudentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<StudentCreateWithoutProjectInput>, Enumerable<StudentUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutProjectInput>
    createMany?: StudentCreateManyProjectInputEnvelope
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    connect?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type ProjectCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ProjectCreateWithoutStudentsInput, ProjectUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStudentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<ProjectCreateWithoutStudentsInput, ProjectUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutStudentsInput
    upsert?: ProjectUpsertWithoutStudentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutStudentsInput, ProjectUncheckedUpdateWithoutStudentsInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ProjectCreateNestedOneWithoutMentorInput = {
    create?: XOR<ProjectCreateWithoutMentorInput, ProjectUncheckedCreateWithoutMentorInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMentorInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneWithoutMentorNestedInput = {
    create?: XOR<ProjectCreateWithoutMentorInput, ProjectUncheckedCreateWithoutMentorInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMentorInput
    upsert?: ProjectUpsertWithoutMentorInput
    disconnect?: boolean
    delete?: boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<ProjectUpdateWithoutMentorInput, ProjectUncheckedUpdateWithoutMentorInput>
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type MentorCreateWithoutProjectInput = {
    id?: bigint | number
    name: string
    isApproved?: boolean
    tgChatId: bigint | number
    tgUserId: bigint | number
    tgUsername?: string | null
  }

  export type MentorUncheckedCreateWithoutProjectInput = {
    id?: bigint | number
    name: string
    isApproved?: boolean
    tgChatId: bigint | number
    tgUserId: bigint | number
    tgUsername?: string | null
  }

  export type MentorCreateOrConnectWithoutProjectInput = {
    where: MentorWhereUniqueInput
    create: XOR<MentorCreateWithoutProjectInput, MentorUncheckedCreateWithoutProjectInput>
  }

  export type StudentCreateWithoutProjectInput = {
    id?: bigint | number
    name: string
    group: string
    isApproved?: boolean
    stars?: number
    hearts?: number
    tgChatId: bigint | number
    tgUserId: bigint | number
    tgUsername?: string | null
  }

  export type StudentUncheckedCreateWithoutProjectInput = {
    id?: bigint | number
    name: string
    group: string
    isApproved?: boolean
    stars?: number
    hearts?: number
    tgChatId: bigint | number
    tgUserId: bigint | number
    tgUsername?: string | null
  }

  export type StudentCreateOrConnectWithoutProjectInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutProjectInput, StudentUncheckedCreateWithoutProjectInput>
  }

  export type StudentCreateManyProjectInputEnvelope = {
    data: Enumerable<StudentCreateManyProjectInput>
    skipDuplicates?: boolean
  }

  export type MentorUpsertWithoutProjectInput = {
    update: XOR<MentorUpdateWithoutProjectInput, MentorUncheckedUpdateWithoutProjectInput>
    create: XOR<MentorCreateWithoutProjectInput, MentorUncheckedCreateWithoutProjectInput>
  }

  export type MentorUpdateWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MentorUncheckedUpdateWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUpsertWithWhereUniqueWithoutProjectInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutProjectInput, StudentUncheckedUpdateWithoutProjectInput>
    create: XOR<StudentCreateWithoutProjectInput, StudentUncheckedCreateWithoutProjectInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutProjectInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutProjectInput, StudentUncheckedUpdateWithoutProjectInput>
  }

  export type StudentUpdateManyWithWhereWithoutProjectInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutStudentsInput>
  }

  export type StudentScalarWhereInput = {
    AND?: Enumerable<StudentScalarWhereInput>
    OR?: Enumerable<StudentScalarWhereInput>
    NOT?: Enumerable<StudentScalarWhereInput>
    id?: BigIntFilter | bigint | number
    name?: StringFilter | string
    group?: StringFilter | string
    isApproved?: BoolFilter | boolean
    stars?: IntFilter | number
    hearts?: IntFilter | number
    tgChatId?: BigIntFilter | bigint | number
    tgUserId?: BigIntFilter | bigint | number
    tgUsername?: StringNullableFilter | string | null
    projectId?: BigIntNullableFilter | bigint | number | null
  }

  export type ProjectCreateWithoutStudentsInput = {
    id?: bigint | number
    name: string
    description: string
    mentor?: MentorCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutStudentsInput = {
    id?: bigint | number
    name: string
    description: string
    mentor?: MentorUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutStudentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutStudentsInput, ProjectUncheckedCreateWithoutStudentsInput>
  }

  export type ProjectUpsertWithoutStudentsInput = {
    update: XOR<ProjectUpdateWithoutStudentsInput, ProjectUncheckedUpdateWithoutStudentsInput>
    create: XOR<ProjectCreateWithoutStudentsInput, ProjectUncheckedCreateWithoutStudentsInput>
  }

  export type ProjectUpdateWithoutStudentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mentor?: MentorUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutStudentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mentor?: MentorUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutMentorInput = {
    id?: bigint | number
    name: string
    description: string
    students?: StudentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMentorInput = {
    id?: bigint | number
    name: string
    description: string
    students?: StudentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMentorInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMentorInput, ProjectUncheckedCreateWithoutMentorInput>
  }

  export type ProjectUpsertWithoutMentorInput = {
    update: XOR<ProjectUpdateWithoutMentorInput, ProjectUncheckedUpdateWithoutMentorInput>
    create: XOR<ProjectCreateWithoutMentorInput, ProjectUncheckedCreateWithoutMentorInput>
  }

  export type ProjectUpdateWithoutMentorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    students?: StudentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMentorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type StudentCreateManyProjectInput = {
    id?: bigint | number
    name: string
    group: string
    isApproved?: boolean
    stars?: number
    hearts?: number
    tgChatId: bigint | number
    tgUserId: bigint | number
    tgUsername?: string | null
  }

  export type StudentUpdateWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    stars?: IntFieldUpdateOperationsInput | number
    hearts?: IntFieldUpdateOperationsInput | number
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateWithoutProjectInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    stars?: IntFieldUpdateOperationsInput | number
    hearts?: IntFieldUpdateOperationsInput | number
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateManyWithoutStudentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    stars?: IntFieldUpdateOperationsInput | number
    hearts?: IntFieldUpdateOperationsInput | number
    tgChatId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUserId?: BigIntFieldUpdateOperationsInput | bigint | number
    tgUsername?: NullableStringFieldUpdateOperationsInput | string | null
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