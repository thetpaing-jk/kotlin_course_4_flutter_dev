# Exam Bank and Answer Key

ဒီဖိုင်က course files ထဲက MCQ / fill-in-the-blank answer key နဲ့ coding exam rubric ဖြစ်ပါတယ်။ Coding answers ကိုတစ်ကြောင်းတည်း fixed answer မဟုတ်ဘဲ correctness rubric နဲ့စစ်ပါ။

## Course 01

MCQ: 1-B, 2-B, 3-B

Fill:

1. `var`
2. `main`
3. `Int`

Coding rubric:

- Function name and parameters exactly match.
- Explicit return type is `String`.
- Uses string template.
- Output follows `Course: completed/total completed` style.

## Course 02

MCQ: 1-B, 2-A, 3-B

Fill:

1. `?.`
2. `!!`
3. `..`

Coding rubric:

- Accepts `String?` and `fallback`.
- Returns fallback when null.
- Treats blank string as fallback.
- Does not use unsafe `!!`.

## Course 03

MCQ: 1-D, 2-B, 3-A

Fill:

1. property
2. final
3. object

Coding rubric:

- `Todo` is a `data class`.
- `TodoEvent` is sealed.
- `Add` and `Toggle` carry required data.
- `ClearCompleted` is represented as singleton object/data object.
- `describe` handles all event types with `when`.

## Course 04

MCQ: 1-A, 2-A, 3-B

Fill:

1. `() -> Unit`
2. `let`
3. `also`

Coding rubric:

- Implements `List<Int>.sumEven()`.
- Filters even numbers correctly.
- Sums only filtered values.
- Demonstrates output from `main()`.

## Course 05

MCQ: 1-B, 2-A, 3-A

Fill:

1. read-only
2. mutable
3. `groupBy`

Coding rubric:

- Groups by `category`.
- Sums `price` for each category.
- Returns `Map<String, Int>`.
- Handles empty list by returning empty map.

## Course 06

MCQ: 1-A, 2-A, 3-A

Fill:

1. `suspend`
2. fire-and-forget
3. `emit`

Coding rubric:

- Uses `coroutineScope`.
- Starts both loads using `async`.
- Awaits both results.
- Returns `Dashboard(user, notifications)`.
- Does not run loads sequentially unless required by dependency.

## Course 07

MCQ: 1-A, 2-A, 3-A

Fill:

1. call/import/use
2. Gradle
3. MethodChannel

Coding rubric:

- Reads from `args["userId"]`.
- Checks runtime type is `String`.
- Rejects blank string.
- Returns nullable `String?`.
- Does not cast unsafely.

## Course 08

MCQ: 1-A, 2-A, 3-A

Fill:

1. `expect`
2. `actual`
3. `T`

Coding rubric:

- `ApiResult` is generic and sealed.
- `Success` carries typed data.
- `Error` carries message.
- `Loading` is singleton.
- `isFinished()` returns false for `Loading`, true for `Success` and `Error`.
