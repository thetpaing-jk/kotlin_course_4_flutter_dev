from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
COURSE_DIR = ROOT / "courses" / "full"


COURSES = [
    {
        "title": "Orientation, Platforms, and Version Awareness",
        "coverage": "Overview, server-side, Android, JavaScript, Native, Multiplatform, What's New in Kotlin 1.1-1.3",
        "lessons": [
            "Kotlin's role across Android, JVM server, JS, Native, and Multiplatform",
            "Why Flutter developers meet Kotlin in Android plugins and native SDKs",
            "Reading old documentation safely: PDF-era Kotlin vs modern Kotlin",
            "Choosing the next deep-dive path after the basics",
        ],
        "flutter": "Flutter already gives you cross-platform UI. Kotlin is most useful for Android native work, shared business logic with KMP, and understanding SDK examples.",
        "practice": "Write a short note listing three places a Flutter project can contain Kotlin code.",
        "mcq": [
            ("For a Flutter developer, the most common first contact with Kotlin is usually:", ["Android native/plugin code", "CSS styling", "SQL schema only", "Figma exports"], "A"),
            ("Kotlin Multiplatform mainly focuses on:", ["Sharing Kotlin code across targets", "Rendering Flutter widgets", "Replacing Dart syntax", "Serving only static HTML"], "A"),
        ],
        "fill": [("The Android side of a Flutter plugin can be written in ____.", "Kotlin"), ("Older PDF docs should be checked against current ____ docs.", "official")],
        "coding": "Create a Kotlin comment block that documents where Kotlin is used in your current Flutter/Android workflow.",
    },
    {
        "title": "Getting Started, Basic Syntax, and Idioms",
        "coverage": "Getting Started, Basic Syntax, Idioms",
        "lessons": [
            "Packages, imports, and the `main()` entry point",
            "`val`, `var`, type inference, comments, and string templates",
            "Functions, default arguments, and named arguments",
            "Kotlin idioms: DTOs, filtering, collection checks, instance checks",
        ],
        "flutter": "`val` feels close to Dart `final`, and Kotlin named/default arguments will feel familiar from Flutter widget constructors.",
        "practice": "Create a `data class CourseProgress` and print a formatted progress string.",
        "mcq": [
            ("Which keyword declares a read-only reference?", ["val", "var", "let", "mutable"], "A"),
            ("Kotlin string templates use:", ["$name and ${expression}", "#{name}", "%name%", "@name"], "A"),
        ],
        "fill": [("The entry point function is usually named ____.", "main"), ("Mutable variables use the keyword ____.", "var")],
        "coding": "Write `fun formatProgress(name: String, done: Int, total: Int): String` using a string template.",
    },
    {
        "title": "Coding Conventions and Project Shape",
        "coverage": "Coding Conventions",
        "lessons": [
            "File naming, package naming, and source layout",
            "Class, function, property, and constant naming conventions",
            "Formatting style: indentation, braces, expression bodies",
            "Writing Kotlin that remains readable inside Android/Flutter plugin projects",
        ],
        "flutter": "Think of this like Dart format and Flutter style rules: consistency makes code reviews easier and plugin code safer.",
        "practice": "Rename three rough Kotlin identifiers into idiomatic names.",
        "mcq": [
            ("Kotlin package names are commonly written in:", ["lowercase dot-separated form", "UpperCamelCase only", "snake_case folders only", "random case"], "A"),
            ("Readable Kotlin usually prefers:", ["clear names and small functions", "deeply nested one-liners everywhere", "unused abbreviations", "manual formatting fights"], "A"),
        ],
        "fill": [("Function names are commonly written in ____ case.", "camel"), ("Constants often use uppercase with ____ between words.", "underscores")],
        "coding": "Refactor a badly named function `fun x(a: Int)` into a clearer Kotlin function signature and body.",
    },
    {
        "title": "Basic Types, Packages, and Imports",
        "coverage": "Basics, Basic Types, Packages",
        "lessons": [
            "Numbers, booleans, characters, strings, arrays",
            "Explicit numeric conversions and why Kotlin avoids surprising casts",
            "String operations and raw strings",
            "Packages/imports as project organization tools",
        ],
        "flutter": "Dart and Kotlin both infer types, but Kotlin is stricter about numeric conversion, which matters when reading Android SDK APIs.",
        "practice": "Convert an `Int` quantity into a `Double` subtotal safely.",
        "mcq": [
            ("Kotlin generally requires numeric conversions to be:", ["explicit", "automatic always", "string based", "ignored"], "A"),
            ("Imports are used to:", ["bring declarations into scope", "run exams", "format UI only", "store progress"], "A"),
        ],
        "fill": [("Convert `count` to Double with `count.____()`.", "toDouble"), ("A package declaration commonly appears at the ____ of a Kotlin file.", "top")],
        "coding": "Write `fun subtotal(price: Int, qty: Int): Double` and return the value as `Double`.",
    },
    {
        "title": "Control Flow, Ranges, Returns, and Jumps",
        "coverage": "Control Flow: if, when, for, while; Returns and Jumps",
        "lessons": [
            "`if` as an expression",
            "`when` for branch-heavy logic",
            "`for`, `while`, ranges, progressions, and loop labels",
            "`return`, `break`, `continue`, and local returns in lambdas",
        ],
        "flutter": "Use `when` the way you might model tab routing, API result states, or platform argument validation in Flutter plugin code.",
        "practice": "Map tab index values to screen names with `when`.",
        "mcq": [
            ("The Kotlin construct commonly used for multi-branch decisions is:", ["when", "choose", "matchOnly", "selectCase"], "A"),
            ("`1..5` creates:", ["an inclusive range", "an exclusive range", "a map", "a nullable string"], "A"),
        ],
        "fill": [("The Elvis-like multi-branch keyword is ____.", "when"), ("Loop from 5 down to 1 using `5 ____ 1`.", "downTo")],
        "coding": "Write `fun screenName(index: Int): String` using `when` for Home, Search, Profile, and Unknown.",
    },
    {
        "title": "Classes, Constructors, and Inheritance",
        "coverage": "Classes and Objects, Classes and Inheritance",
        "lessons": [
            "Primary and secondary constructors",
            "Properties in constructor parameters",
            "Classes are final by default",
            "`open`, overriding, abstract classes, and inheritance tradeoffs",
        ],
        "flutter": "Model classes in Flutter often become Kotlin classes or data classes when implementing Android-side SDK integrations.",
        "practice": "Create a `User` class with immutable `id` and mutable `displayName`.",
        "mcq": [
            ("Kotlin classes are default:", ["final", "open", "abstract", "dynamic"], "A"),
            ("To allow inheritance, a class can be marked:", ["open", "extendable", "baseOnly", "inherit"], "A"),
        ],
        "fill": [("Constructor parameters become properties when marked with `val` or ____.", "var"), ("Override a member with the keyword ____.", "override")],
        "coding": "Create an `open class Repository` and a subclass `CachedRepository` that overrides `refresh()`.",
    },
    {
        "title": "Properties, Fields, Interfaces, and Visibility",
        "coverage": "Properties and Fields, Interfaces, Visibility Modifiers",
        "lessons": [
            "Property getters, setters, backing fields, and backing properties",
            "`lateinit`, `const`, and computed properties",
            "Interfaces with abstract and default members",
            "`public`, `internal`, `protected`, and `private`",
        ],
        "flutter": "Visibility control is useful when exposing only a clean API from Android native helpers to Flutter plugin code.",
        "practice": "Create a `Cart` with private setter for `itemCount`.",
        "mcq": [
            ("A property setter can be made private to:", ["control mutation", "delete the property", "make it JavaScript", "disable imports"], "A"),
            ("An interface is best for:", ["a shared contract", "a package name", "a loop range", "a string template"], "A"),
        ],
        "fill": [("Module-level visibility uses the keyword ____.", "internal"), ("A non-null var initialized later can use ____.", "lateinit")],
        "coding": "Write an interface `Trackable` and a class `DownloadTask` implementing it with a read-only public progress value.",
    },
    {
        "title": "Extensions, Data Classes, and Sealed Classes",
        "coverage": "Extensions, Data Classes, Sealed Classes",
        "lessons": [
            "Extension functions and extension properties",
            "Data class generated behavior: equality, copy, destructuring",
            "Sealed classes and sealed interfaces for finite state models",
            "Using exhaustive `when` for UI/API states",
        ],
        "flutter": "This is the Kotlin version of clean app state modeling: `data class` for values, `sealed class` for Loading/Success/Error.",
        "practice": "Model `AuthState` as a sealed class.",
        "mcq": [
            ("Value-style models are commonly represented with:", ["data class", "while class", "package class", "jump class"], "A"),
            ("Finite UI states are often modeled with:", ["sealed class", "raw string", "array index only", "import alias only"], "A"),
        ],
        "fill": [("Create a copy of a data class with the generated ____ function.", "copy"), ("An extension function starts with `fun Type.____`.", "name")],
        "coding": "Create `sealed class UiState` with Loading, Success(data), and Error(message), then describe it with `when`.",
    },
    {
        "title": "Generics, Nested Classes, Inner Classes, and Enums",
        "coverage": "Generics, Nested and Inner Classes, Enum Classes",
        "lessons": [
            "Generic classes and functions",
            "Variance basics: `out`, `in`, and star projections",
            "Nested classes vs `inner` classes",
            "Enums with properties and behavior",
        ],
        "flutter": "Generic result wrappers such as `ApiResult<T>` are directly useful when modeling repository responses.",
        "practice": "Create `ApiResponse<T>` with data and message fields.",
        "mcq": [
            ("A type parameter is commonly written as:", ["T", "#", "var", "pkg"], "A"),
            ("An `inner` class can access:", ["outer class members", "only CSS", "no members", "Gradle plugins only"], "A"),
        ],
        "fill": [("Covariant generic position uses the keyword ____.", "out"), ("Enum constants are declared inside an ____ class.", "enum")],
        "coding": "Create `sealed class ApiResult<out T>` with Success, Loading, and Error.",
    },
    {
        "title": "Objects, Inline Value Classes, and Delegation",
        "coverage": "Object Expressions and Declarations, Inline classes, Delegation",
        "lessons": [
            "Object declarations as singletons",
            "Companion objects and object expressions",
            "Inline/value classes for lightweight domain wrappers",
            "Class delegation with `by`",
        ],
        "flutter": "Singleton helpers and small ID wrappers can keep native integration code less error-prone.",
        "practice": "Wrap a raw user id string in a value class.",
        "mcq": [
            ("A singleton object is declared with:", ["object", "single", "static class", "onlyOne"], "A"),
            ("Delegation commonly uses the keyword:", ["by", "via", "using", "from"], "A"),
        ],
        "fill": [("A companion object lives inside a ____.", "class"), ("A lightweight wrapper can be a value ____.", "class")],
        "coding": "Create `@JvmInline value class UserId(val value: String)` and a function that accepts `UserId`.",
    },
    {
        "title": "Delegated Properties and Destructuring",
        "coverage": "Delegated Properties, Destructuring Declarations",
        "lessons": [
            "Property delegation with `by`",
            "Standard delegates: `lazy`, observable, vetoable",
            "Map-backed properties",
            "Destructuring declarations and component functions",
        ],
        "flutter": "Lazy values are useful for native SDK setup work that should happen only when actually needed.",
        "practice": "Use `lazy` to initialize a simulated SDK client.",
        "mcq": [
            ("Lazy initialization can use:", ["by lazy", "by late", "open lazy", "lazy import"], "A"),
            ("Destructuring reads values through:", ["component functions", "package names", "CSS selectors", "Gradle tasks"], "A"),
        ],
        "fill": [("Delegated properties use the keyword ____.", "by"), ("Pair destructuring can look like `val (a, b) = ____`.", "pair")],
        "coding": "Create a data class `Point(x, y)` and destructure it into two variables.",
    },
    {
        "title": "Functions and Function Design",
        "coverage": "Functions",
        "lessons": [
            "Function declarations and expression bodies",
            "Default and named arguments",
            "Varargs and infix functions",
            "Local functions and tail recursion basics",
        ],
        "flutter": "Kotlin named arguments are familiar if you are used to Flutter widget constructors, but Kotlin does not use Dart's curly parameter syntax.",
        "practice": "Write a function with default arguments and call it with named arguments.",
        "mcq": [
            ("Expression-body functions use:", ["=", "=> only", "function", "returns"], "A"),
            ("Variable-length parameters use:", ["vararg", "many", "spreadonly", "arrayarg"], "A"),
        ],
        "fill": [("Named arguments use the form `name = ____`.", "value"), ("Default parameter values are placed in the function ____.", "signature")],
        "coding": "Write `fun buildLabel(title: String, prefix: String = \"Course\"): String`.",
    },
    {
        "title": "Higher-Order Functions, Lambdas, and Inline Functions",
        "coverage": "Higher-Order Functions and Lambdas, Inline Functions",
        "lessons": [
            "Functions as values and parameters",
            "Lambda syntax and `it`",
            "Function types, receivers, and closures",
            "`inline`, `noinline`, `crossinline`, and performance tradeoffs",
        ],
        "flutter": "Builder callbacks in Flutter map nicely to Kotlin lambdas, especially when reading Android DSL APIs.",
        "practice": "Write a `retry(times, block)` higher-order function.",
        "mcq": [
            ("A function that accepts another function is:", ["higher-order", "higher-package", "sealed-only", "native-only"], "A"),
            ("The default single lambda parameter name is:", ["it", "this", "arg0 only", "valueOnly"], "A"),
        ],
        "fill": [("A no-parameter Unit lambda type is `() -> ____`.", "Unit"), ("Inline functions use the keyword ____.", "inline")],
        "coding": "Write `fun repeatTwice(block: () -> Unit)` and call it from `main()`.",
    },
    {
        "title": "Collections Overview and Construction",
        "coverage": "Kotlin Collections Overview, Constructing Collections",
        "lessons": [
            "Read-only vs mutable collection interfaces",
            "Lists, sets, and maps",
            "Constructing collections with factory functions",
            "Choosing collection types for app data",
        ],
        "flutter": "Kotlin makes mutability more explicit than many Dart list workflows, which helps when modeling app state.",
        "practice": "Create read-only and mutable product lists.",
        "mcq": [
            ("A mutable list can be created with:", ["mutableListOf", "listOnly", "constList", "arrayMap"], "A"),
            ("A set is useful when values should be:", ["unique", "always duplicated", "nullable only", "sorted by UI"], "A"),
        ],
        "fill": [("A read-only list factory is ____.", "listOf"), ("A map stores key-____ pairs.", "value")],
        "coding": "Create `fun uniqueTags(tags: List<String>): Set<String>`.",
    },
    {
        "title": "Iterators, Ranges, Progressions, and Sequences",
        "coverage": "Iterators, Ranges and Progressions, Sequences",
        "lessons": [
            "Iterating collections explicitly and implicitly",
            "Ranges and progressions",
            "Sequence laziness",
            "When sequences help and when they are unnecessary",
        ],
        "flutter": "Dart `Iterable` has lazy behaviors; Kotlin uses `Sequence` explicitly for lazy chains.",
        "practice": "Build a lazy sequence that filters even values and takes the first five.",
        "mcq": [
            ("Kotlin lazy collection pipelines commonly use:", ["Sequence", "Package", "Annotation", "Visibility"], "A"),
            ("`step` changes:", ["range progression increments", "package names", "nullability", "class inheritance"], "A"),
        ],
        "fill": [("Convert an iterable to lazy processing with `____()`.", "asSequence"), ("Use `downTo` for descending ____.", "ranges")],
        "coding": "Return the first 10 doubled even numbers from `1..1000` using a sequence.",
    },
    {
        "title": "Collection Transformations and Filtering",
        "coverage": "Collection Operations Overview, Collection Transformations, Filtering, plus and minus Operators",
        "lessons": [
            "`map`, `flatMap`, `associate`, and `zip`",
            "`filter`, `filterNot`, `filterIsInstance`, and predicates",
            "`plus` and `minus` operators",
            "Readable data shaping for UI lists",
        ],
        "flutter": "This is close to Dart `map`, `where`, and list spread thinking in Flutter UI preparation.",
        "practice": "Filter expensive products and map them to display labels.",
        "mcq": [
            ("The operation that changes each item into another value is:", ["map", "when", "object", "throw"], "A"),
            ("The operation that keeps only matching values is:", ["filter", "copy", "open", "package"], "A"),
        ],
        "fill": [("Flatten mapped collections with ____.", "flatMap"), ("Remove items using the ____ operator.", "minus")],
        "coding": "Write `fun productLabels(products: List<Product>): List<String>` using `filter` and `map`.",
    },
    {
        "title": "Grouping, Retrieval, Ordering, Aggregates, and Writes",
        "coverage": "Grouping, Retrieving Collection Parts, Retrieving Single Elements, Collection Ordering, Collection Aggregate Operations, Collection Write Operations",
        "lessons": [
            "`groupBy` and `groupingBy`",
            "Slices, chunks, windows, first/last/single",
            "Sorting and ordering",
            "Aggregates and mutable collection writes",
        ],
        "flutter": "These tools are useful when turning API responses into grouped sections for Flutter UI.",
        "practice": "Group orders by status and calculate totals.",
        "mcq": [
            ("Grouping items by key commonly uses:", ["groupBy", "jumpBy", "classBy", "packageBy"], "A"),
            ("Summing numeric values commonly uses:", ["sumOf", "sumByPackage", "totalClass", "whenSum"], "A"),
        ],
        "fill": [("Sort ascending with ____.", "sorted"), ("Break a list into fixed-size pieces with ____.", "chunked")],
        "coding": "Write `fun totalsByCategory(products: List<Product>): Map<String, Int>`.",
    },
    {
        "title": "List, Set, and Map Specific Operations",
        "coverage": "List Specific Operations, Set Specific Operations, Map Specific Operations",
        "lessons": [
            "List index operations and sublists",
            "Set union, intersect, and subtract",
            "Map keys, values, entries, and transformations",
            "Choosing data structures for app features",
        ],
        "flutter": "Maps often represent platform channel arguments; Kotlin lets you validate them carefully.",
        "practice": "Read a user id safely from `Map<String, Any?>`.",
        "mcq": [
            ("Map entries are key-value:", ["pairs", "ranges", "classes", "coroutines"], "A"),
            ("Set operation for common elements is:", ["intersect", "inside", "joinOnly", "mapAt"], "A"),
        ],
        "fill": [("Access map values by ____.", "key"), ("List positions are called ____.", "indices")],
        "coding": "Write `fun readString(args: Map<String, Any?>, key: String): String?`.",
    },
    {
        "title": "Multiplatform Foundations and Gradle Projects",
        "coverage": "Multiplatform Programming, Platform-Specific Declarations, Building Multiplatform Projects with Gradle",
        "lessons": [
            "Common source sets and platform source sets",
            "`expect` and `actual` declarations",
            "Sharing models, validation, and networking code",
            "Gradle project shape for KMP",
        ],
        "flutter": "KMP is not Flutter, but both care about sharing logic. Flutter shares UI; KMP shares Kotlin code across platform apps.",
        "practice": "Identify which parts of a Flutter app could become shared business logic.",
        "mcq": [
            ("Common declarations can use:", ["expect", "maybe", "sharedOnly", "platform"], "A"),
            ("Platform implementations can use:", ["actual", "real", "nativeOnly", "targeted"], "A"),
        ],
        "fill": [("KMP shared code often lives in a ____ source set.", "common"), ("Build setup is commonly managed with ____.", "Gradle")],
        "coding": "Sketch `expect fun platformName(): String` and one `actual` implementation.",
    },
    {
        "title": "Type Checks, Casts, This, Equality, and Operators",
        "coverage": "Type Checks and Casts: is and as, This Expression, Equality, Operator overloading",
        "lessons": [
            "`is`, smart casts, `as`, and `as?`",
            "`this` labels and receiver disambiguation",
            "Structural equality vs referential equality",
            "Operator overloading and when to avoid cleverness",
        ],
        "flutter": "Smart casts help when validating `Any?` values coming from platform channel arguments.",
        "practice": "Safely cast a platform argument into `String`.",
        "mcq": [
            ("Safe cast uses:", ["as?", "as!!", "cast?", "safeAsOnly"], "A"),
            ("Structural equality uses:", ["==", "===", "equalsRefOnly", "sameObject"], "A"),
        ],
        "fill": [("Type checking uses the keyword ____.", "is"), ("Referential equality uses ____.", "===")],
        "coding": "Write `fun readNonBlankString(value: Any?): String?` using safe cast and blank checking.",
    },
    {
        "title": "Null Safety, Exceptions, and Annotations",
        "coverage": "Null Safety, Exceptions, Annotations",
        "lessons": [
            "Nullable vs non-nullable types",
            "Safe calls, Elvis operator, and not-null assertion",
            "Exception handling with `try`, `catch`, `finally`",
            "Annotations and metadata-driven tooling",
        ],
        "flutter": "Dart null safety helps here, but Kotlin Java interop adds platform-type risk.",
        "practice": "Avoid `!!` while reading nested nullable data.",
        "mcq": [
            ("A nullable String is written:", ["String?", "String!", "?String", "NullableString"], "A"),
            ("The not-null assertion operator is:", ["!!", "??", "?:", "?."], "A"),
        ],
        "fill": [("Safe calls use ____.", "?."), ("Fallback values commonly use the Elvis operator ____.", "?:")],
        "coding": "Write `fun safeLength(text: String?): Int` without using `!!`.",
    },
    {
        "title": "Reflection, Scope Functions, and Type-Safe Builders",
        "coverage": "Reflection, Scope Functions, Type-Safe Builders",
        "lessons": [
            "Reflection overview and when it is costly",
            "`let`, `run`, `with`, `apply`, and `also`",
            "Receiver lambdas and builder-style APIs",
            "Type-safe builders as Kotlin DSL foundations",
        ],
        "flutter": "Scope functions can make native setup code concise, but overuse can become as hard to read as deeply nested widgets.",
        "practice": "Configure an object with `apply` and log it with `also`.",
        "mcq": [
            ("Configure object and return it:", ["apply", "let", "withOnly", "reflect"], "A"),
            ("Side effect and return original object:", ["also", "run", "thisOnly", "build"], "A"),
        ],
        "fill": [("Nullable transform blocks often use ____.", "let"), ("Type-safe builders usually rely on lambdas with ____.", "receiver")],
        "coding": "Create a small builder-style function using a lambda with receiver.",
    },
    {
        "title": "Experimental APIs, Keywords, Operators, and Grammar",
        "coverage": "Experimental API Markers, Reference, Keywords and Operators, Grammar",
        "lessons": [
            "Opt-in API design and experimental markers",
            "Reading the keyword/operator reference",
            "Grammar as a tool for resolving syntax confusion",
            "How to use reference docs without memorizing every rule",
        ],
        "flutter": "Treat this like Dart language reference: you rarely memorize all of it, but you know where to look when code is confusing.",
        "practice": "Look up three Kotlin keywords and write what each one controls.",
        "mcq": [
            ("Experimental APIs often require:", ["opt-in", "no import ever", "CSS marker", "database migration"], "A"),
            ("The grammar reference helps explain:", ["valid syntax forms", "exam scores", "screen sizes", "server ports"], "A"),
        ],
        "fill": [("Experimental usage may require an ____ annotation.", "OptIn"), ("Reserved language words are called ____.", "keywords")],
        "coding": "Write a short example using `@OptIn` as a commented sketch.",
    },
    {
        "title": "Java Interop Part 1: Calling Java from Kotlin",
        "coverage": "Java Interop, Calling Java code from Kotlin",
        "lessons": [
            "Calling Java methods and using Java classes",
            "Getters/setters as properties",
            "SAM conversions and Java callbacks",
            "Platform types and nullability annotations",
        ],
        "flutter": "Most Android SDK docs have Java examples, so you need to translate Java idioms into Kotlin safely.",
        "practice": "Wrap a nullable Java-style result into a safe Kotlin function.",
        "mcq": [
            ("Java nullability without metadata may appear as:", ["platform type", "Flutter type", "CSS type", "sealed type"], "A"),
            ("A Java getter may look like a Kotlin:", ["property", "package", "range", "flow"], "A"),
        ],
        "fill": [("Java classes can be used from ____.", "Kotlin"), ("A Java single-method interface can use SAM ____.", "conversion")],
        "coding": "Write a Kotlin wrapper that turns a Java-style nullable string into a non-null display label.",
    },
    {
        "title": "Java Interop Part 2: Calling Kotlin from Java",
        "coverage": "Calling Kotlin from Java",
        "lessons": [
            "How Kotlin declarations appear to Java",
            "`@JvmStatic`, `@JvmField`, and file facades",
            "Default arguments and overloads",
            "Designing Kotlin APIs that Java callers can use cleanly",
        ],
        "flutter": "If an Android SDK or generated code calls your Kotlin, Java-facing annotations can matter.",
        "practice": "Expose a companion object helper as a static Java method.",
        "mcq": [
            ("Expose companion member as Java static with:", ["@JvmStatic", "@StaticOnly", "@JavaCall", "@CompanionStaticOnly"], "A"),
            ("Generate overloads for default arguments with:", ["@JvmOverloads", "@ManyConstructors", "@OverloadAll", "@DefaultJava"], "A"),
        ],
        "fill": [("A field can be exposed with ____.", "@JvmField"), ("Kotlin files compile to Java-visible file ____.", "facades")],
        "coding": "Sketch a Kotlin utility object with a `@JvmStatic` function.",
    },
    {
        "title": "Kotlin JavaScript",
        "coverage": "JavaScript, Dynamic Type, Calling JavaScript from Kotlin, Calling Kotlin from JavaScript, JavaScript Modules, JavaScript Reflection, JavaScript DCE, Example",
        "lessons": [
            "Kotlin/JS target overview",
            "`dynamic` and JavaScript interop",
            "Modules and calling across Kotlin/JS boundaries",
            "Dead code elimination and JS-specific limitations",
        ],
        "flutter": "Kotlin/JS is not Flutter web; it is Kotlin compiled for JavaScript ecosystems.",
        "practice": "Write a comparison note between Flutter web and Kotlin/JS.",
        "mcq": [
            ("Kotlin/JS compiles Kotlin to target:", ["JavaScript", "Swift only", "Dart only", "SQL"], "A"),
            ("The JS interop flexible type is:", ["dynamic", "AnyNative", "jsObjectOnly", "flex"], "A"),
        ],
        "fill": [("Unused JS output can be reduced by DCE: dead code ____.", "elimination"), ("JavaScript module interop involves JS ____.", "modules")],
        "coding": "Sketch an external JavaScript function declaration in Kotlin/JS.",
    },
    {
        "title": "Kotlin Native and Platform Interop",
        "coverage": "Native, Concurrency in Kotlin/Native, Immutability in Kotlin/Native, Kotlin/Native libraries, Advanced topics, Platform libraries, Kotlin/Native interoperability, Swift/Objective-C, CocoaPods, Kotlin/Native Gradle plugin",
        "lessons": [
            "Kotlin/Native target overview",
            "Native libraries and platform libraries",
            "Swift/Objective-C interoperability",
            "CocoaPods and Gradle integration",
        ],
        "flutter": "Flutter plugins may already expose iOS/Android native layers; Kotlin/Native appears more often in KMP shared modules.",
        "practice": "List what shared Kotlin code would expose to iOS.",
        "mcq": [
            ("Kotlin/Native can compile without:", ["JVM", "source files", "functions", "types"], "A"),
            ("iOS interop often involves:", ["Swift/Objective-C", "CSS", "Dart analyzer", "HTML forms"], "A"),
        ],
        "fill": [("iOS dependency integration can use ____.", "CocoaPods"), ("Native platform APIs are exposed through platform ____.", "libraries")],
        "coding": "Sketch an API that shared Kotlin code could expose to an iOS app.",
    },
    {
        "title": "Coroutines Part 1: Basics, Cancellation, Composition, and Context",
        "coverage": "Coroutines, Coroutine Basics, Cancellation and Timeouts, Composing Suspending Functions, Coroutine Context and Dispatchers",
        "lessons": [
            "Coroutine basics and suspending functions",
            "Cancellation and timeout handling",
            "Sequential vs concurrent composition with `async`",
            "Coroutine context and dispatchers",
        ],
        "flutter": "Dart `Future` maps conceptually to suspend work, but Kotlin adds structured concurrency and dispatcher control.",
        "practice": "Run two fake network requests concurrently with `async`.",
        "mcq": [
            ("A suspendable function uses:", ["suspend", "asyncOnly", "future", "awaited"], "A"),
            ("Run concurrent result-producing work with:", ["async", "package", "object", "annotation"], "A"),
        ],
        "fill": [("Switch IO work using `Dispatchers.____`.", "IO"), ("Wait for `async` result with ____.", "await")],
        "coding": "Write `suspend fun loadDashboard()` using `coroutineScope` and two `async` calls.",
    },
    {
        "title": "Coroutines Part 2: Flow, Channels, Exceptions, Shared State, and Select",
        "coverage": "Asynchronous Flow, Channels, Exception Handling, Shared mutable state and concurrency, Select Expression",
        "lessons": [
            "Flow as asynchronous streams",
            "Channels for coroutine communication",
            "Exception handling and supervision basics",
            "Shared mutable state, synchronization, and select expressions",
        ],
        "flutter": "Flow is the closest Kotlin concept to Dart `Stream`, but coroutine cancellation and collection scopes matter.",
        "practice": "Create a Flow that emits loading progress values.",
        "mcq": [
            ("Asynchronous streams in coroutines commonly use:", ["Flow", "MapOnly", "Object", "Package"], "A"),
            ("Flow values are produced with:", ["emit", "print", "returnOnly", "package"], "A"),
        ],
        "fill": [("Dart Stream is conceptually close to Kotlin ____.", "Flow"), ("Mutable shared state needs careful ____ control.", "concurrency")],
        "coding": "Write a `Flow<Int>` that emits 0, 50, and 100.",
    },
    {
        "title": "Documentation, Build Tools, Compiler Plugins, and Style Migration",
        "coverage": "Tools, Documenting Kotlin Code, Annotation Processing, Using Gradle, Using Maven, Using Ant, Kotlin and OSGi, Compiler Plugins, Code Style Migration Guide",
        "lessons": [
            "KDoc and documentation habits",
            "KAPT/annotation processing overview",
            "Gradle, Maven, Ant, and build tool awareness",
            "Compiler plugins and code style migration",
        ],
        "flutter": "Flutter projects still contain Android Gradle files, so Gradle literacy makes native-side debugging less painful.",
        "practice": "Find one dependency declaration in an Android Gradle file and identify group/artifact/version.",
        "mcq": [
            ("Kotlin documentation comments are commonly called:", ["KDoc", "KText", "DocStringOnly", "JSDoc"], "A"),
            ("Android Kotlin builds commonly use:", ["Gradle", "Photoshop", "SQLite only", "Figma"], "A"),
        ],
        "fill": [("Annotation processing for Kotlin is often abbreviated ____.", "KAPT"), ("Build logic can use Kotlin or Groovy ____.", "DSL")],
        "coding": "Write a commented Gradle Kotlin DSL dependency example for a Kotlin library.",
    },
    {
        "title": "Evolution, Stability, Compatibility, FAQ, and Java Comparison",
        "coverage": "Evolution, Kotlin Evolution, Stability of Different Components, Compatibility Guide for Kotlin 1.3, FAQ, Comparison to Java Programming Language",
        "lessons": [
            "How Kotlin evolves and why compatibility matters",
            "Stable vs experimental components",
            "Reading compatibility guides during upgrades",
            "Kotlin vs Java differences that matter in Android work",
        ],
        "flutter": "Treat Kotlin upgrades like Flutter/Dart upgrades: read migration notes, check plugins, and test native paths.",
        "practice": "Write a checklist for upgrading Kotlin in a Flutter Android project.",
        "mcq": [
            ("Compatibility guides help during:", ["version upgrades", "button styling only", "image export", "screen recording"], "A"),
            ("Experimental APIs should be treated with:", ["extra care", "automatic production trust", "no documentation", "no tests"], "A"),
        ],
        "fill": [("Kotlin runs well with existing ____ ecosystems.", "Java"), ("Version upgrades should include reading ____ notes.", "migration")],
        "coding": "Write a Kotlin upgrade checklist as comments in a `.kt` file.",
    },
]


def slugify(title: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "_", title.lower()).strip("_")
    return slug[:64]


def md_for_course(course: dict, index: int) -> str:
    number = f"{index:02d}"
    lessons = "\n\n".join(
        f"### {i}. {lesson}\n\n"
        f"ဒီ lesson မှာ `{lesson}` ကို Kotlin syntax, practical usage, Flutter/Dart comparison ဆိုတဲ့ angle သုံးခုနဲ့ဖတ်ပါ။ "
        f"စာအုပ်ထဲက section ကိုတိုက်ရိုက်မကူးဘဲ concept ကို developer workflow ထဲသုံးနိုင်အောင်ပြန်ရေးထားပါတယ်။"
        for i, lesson in enumerate(course["lessons"], 1)
    )
    practices = "\n".join(f"{i}. {item}" for i, item in enumerate([course["practice"], "Create one small Kotlin example and explain it with a Dart/Flutter analogy.", "Write one mistake you should avoid in production code."], 1))
    qna = "\n".join(
        f"- {question}"
        for question in [
            f"`{course['title']}` ကို Flutter developer အမြင်နဲ့ ဘယ် use case မှာအရေးကြီးဆုံးလဲ?",
            "ဒီ topic အတွက် current Kotlin official docs မှာ PDF-era docs နဲ့ကွာတာရှိလား?",
            "Production Android/Flutter plugin code မှာ common mistake ဘာတွေရှိလဲ?",
        ]
    )
    mcq = []
    for i, (prompt, options, _answer) in enumerate(course["mcq"], 1):
        mcq.append(f"{i}. {prompt}")
        for key, option in zip(["A", "B", "C", "D"], options):
            mcq.append(f"   - {key}. {option}")
    fill = "\n".join(f"{i}. {prompt}" for i, (prompt, _answer) in enumerate(course["fill"], 1))
    return f"""# Course {number} - {course['title']}

## Goal

စာအုပ်ထဲက `{course['coverage']}` section တွေကို Flutter developer အတွက် လက်တွေ့သုံးနိုင်တဲ့ Kotlin lesson အဖြစ်ခွဲသင်မယ်။

## PDF Coverage

{course['coverage']}

## Lessons

{lessons}

## Flutter Bridge

{course['flutter']}

## Practice

{practices}

## Q&A Checkpoint

{qna}

## Exam

### Multiple Choice

{chr(10).join(mcq)}

### Fill In The Blank

{fill}

### Coding Exam

{course['coding']}
"""


def main() -> None:
    COURSE_DIR.mkdir(parents=True, exist_ok=True)
    manifest = []
    answer_key = {}
    coverage_lines = ["# Full Coverage Map", ""]

    for index, course in enumerate(COURSES, 1):
        filename = f"course_{index:02d}_{slugify(course['title'])}.md"
        rel_path = f"courses/full/{filename}"
        path = ROOT / rel_path
        path.write_text(md_for_course(course, index), encoding="utf-8")
        manifest.append({"path": rel_path, "title": f"Course {index:02d} - {course['title']}"})
        answer_key[rel_path] = {
            "mcq": [item[2] for item in course["mcq"]],
            "fill": [item[1] for item in course["fill"]],
            "rubric": [
                "Uses Kotlin syntax relevant to the course topic.",
                "Handles nullability/type-safety where applicable.",
                "Names functions/classes clearly.",
                "Includes a small explanation or structure that a Flutter developer can relate to.",
            ],
        }
        coverage_lines.append(f"- Course {index:02d}: {course['coverage']}")

    (COURSE_DIR / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    (ROOT / "exams" / "full_answer_key.json").write_text(json.dumps(answer_key, indent=2), encoding="utf-8")
    (ROOT / "references" / "full_coverage_map.md").write_text("\n".join(coverage_lines) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
