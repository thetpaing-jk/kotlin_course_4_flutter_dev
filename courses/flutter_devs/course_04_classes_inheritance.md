# Course 04 - Classes နဲ့ Inheritance

## Goal

Study this module from `files.zip` and use the included exam questions as the source of truth for assessment.

## Lessons

### 4.1 Class Declaration

**Kotlin:**
```kotlin
class Person(val firstName: String, val lastName: String, var age: Int) {
    fun fullName(): String = "$firstName $lastName"
    fun birthday() { age++ }
}

val person = Person("Aung", "Kyaw", 25)
println(person.fullName())
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
class Person {
    final String firstName;
    final String lastName;
    int age;
    Person(this.firstName, this.lastName, this.age);
    String fullName() => "$firstName $lastName";
    void birthday() { age++; }
}
```

> 💡 Kotlin primary constructor မှာ `val`/`var` ထည့်ရင် property declaration + initialization တပြိုင်နက် ပြီးတယ်။

---

### 4.2 init Block

```kotlin
class User(val name: String, val email: String) {
    init {
        require(name.isNotBlank()) { "Name cannot be blank" }
        require(email.contains("@")) { "Invalid email" }
        println("User created: $name")
    }
}
```

---

### 4.3 Inheritance

Kotlin မှာ class တွေ default ကတည်းက `final` — extend လုပ်ချင်ရင် `open` ထည့်ရတယ်။

**Kotlin:**
```kotlin
open class Shape(val color: String) {
    open fun area(): Double = 0.0
}

class Circle(color: String, val radius: Double) : Shape(color) {
    override fun area() = Math.PI * radius * radius
}
```

**Dart နဲ့ နှိုင်းယှဉ်:**
```dart
class Shape {
    final String color;
    Shape(this.color);
    double area() => 0.0;
}
class Circle extends Shape {
    final double radius;
    Circle(super.color, this.radius);
    @override
    double area() => 3.14159 * radius * radius;
}
```

> 💡 Kotlin မှာ `override` keyword မဖြစ်မနေ ထည့်ရတယ်၊ ထည့်မထားရင် compiler error ဖြစ်တယ်။

---

### 4.4 Interfaces

```kotlin
interface Clickable {
    fun onClick()
    fun onLongClick() {
        println("Long clicked!")  // default implementation
    }
}

class Button : Clickable {
    override fun onClick() {
        println("Button clicked!")
    }
}
```

---

## Flutter Bridge

Use the Dart/Flutter comparisons in this course when reading Kotlin code in Android plugins, native SDK integrations, or platform-channel work.

## Practice

1. Re-type one Kotlin example from the lesson.
2. Write the comparable Dart/Flutter version where the course provides one.
3. Note one Kotlin syntax difference that matters for Flutter Android work.

## Q&A Checkpoint

- What Kotlin idea from this course feels closest to Dart/Flutter?
- Which syntax difference from this course should I remember in Android plugin code?
- How would this concept appear in real Flutter + Android native work?

## Exam

### Multiple Choice
1. Kotlin class ကို extend (inherit) လုပ်ခွင့်ပြုဖို့ ဘာ keyword ထည့်ရတယ်?
- A. `abstract`
- B. `open`
- C. `extend`
- D. `virtual`

2. Kotlin မှာ parent class ရဲ့ method ကို override လုပ်ဖို့ ဘာလုပ်ရတယ်?
- A. `@override` annotation ထည့်
- B. `override` keyword ထည့်ပြီး parent method က `open` ဖြစ်ရမည်
- C. method name တူတူပဲ ရေးရတယ်
- D. `virtual` keyword သုံးရတယ်

3. Dart ရဲ့ `extends` keyword နဲ့ ညီတဲ့ Kotlin inheritance syntax က ဘာလဲ?
- A. `extends ParentClass()`
- B. `implements ParentClass()`
- C. `: ParentClass()`
- D. `inherits ParentClass()`

4. Kotlin ရဲ့ `init` block ရဲ့ ရည်ရွယ်ချက်က ဘာလဲ?
- A. static method ကြေငြာဖို့
- B. primary constructor run ချိန်မှာ initialization code ထည့်ဖို့
- C. interface implement လုပ်ဖို့
- D. abstract method ကြေငြာဖို့

5. Kotlin မှာ `new` keyword မပါဘဲ instance create လုပ်ရင် ဘာဖြစ်မလဲ?
- A. Compilation error
- B. Runtime error
- C. ပုံမှန်အတိုင်း အလုပ်လုပ်တယ် — `new` keyword မလိုဘူး
- D. Null ရမည်

6. Interface မှာ default implementation ထည့်ရင် ဘာဖြစ်မလဲ?
- A. Compilation error
- B. ရတယ် — class တွေ override မလုပ်ဘဲ inherit လုပ်နိုင်
- C. Abstract class သာ default implementation ပေးနိုင်
- D. interface ကို class အဖြစ် ပြောင်းပေးမည်

7. Dart ရဲ့ `@override` နဲ့ Kotlin ရဲ့ `override` ကွာတာက?
- A. ကွာချက်မရှိ
- B. Kotlin မှာ `override` က mandatory keyword ဖြစ်ပြီး빠뜨်ရင် error
- C. Dart မှာ `@override` က mandatory
- D. Kotlin မှာ `override` မသုံးရ

8. Primary constructor မှာ `var` သုံးရင် ဘာဆိုလိုတာလဲ?
- A. read-only property
- B. mutable property — ပြင်လို့ရတယ်
- C. static property
- D. private property

### Fill In The Blank
1. Kotlin မှာ class ကို subclass လုပ်ခွင့်ပေးဖို့ `________` keyword သုံးတယ်။
2. Parent class ရဲ့ method ကို child class မှာ ပြန်ရေးဖို့ `________` keyword ထည့်ရတယ်။
3. Kotlin မှာ class instance create လုပ်တဲ့အချိန် `________` keyword မသုံးရ (Dart နဲ့ ကွာ)။
4. Kotlin inheritance syntax မှာ parent class ကို `: ________()` ဆိုပြီး ကြေငြာတယ်။
5. Constructor run ချိန်မှာ code ထည့်ချင်ရင် `________` block ထဲမှာ ရေးတယ်။
6. Interface ကို implement လုပ်တာနဲ့ class ကို extend လုပ်တာ Kotlin မှာ syntax `________` တူတူပဲ `:` သုံးတယ်။

### Coding Exam
**Problem 1 — Class Declaration**

`Product` class တစ်ခု ရေးပါ။ `name` (String, read-only), `price` (Double, mutable), `inStock` (Boolean, mutable, default `true`) property တွေပါရမည်။ `displayInfo()` function တစ်ခု ထည့်ပြီး product info ကို print လုပ်ပါ။

**Problem 2 — Inheritance**

Problem 1 ကို base class အနေနဲ့ သုံးပြီး `DigitalProduct` subclass ရေးပါ။ `fileSize` (Int, MB ဖြင့်) property ထပ်ထည့်ပြီး `displayInfo()` ကို override လုပ်ကာ file size ပါ print ပါ။

**Problem 3 — Interface**

`Downloadable` interface တစ်ခု ရေးပါ — `download()` abstract method နဲ့ `cancelDownload()` default implementation (`"Download cancelled"` print လုပ်) ပါရမည်။ Problem 2 ရဲ့ `DigitalProduct` class မှာ `Downloadable` ကို implement လုပ်ပြီး `download()` ကို ရေးပါ။

---
