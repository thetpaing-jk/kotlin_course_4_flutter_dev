# Course 04 - Classes နဲ့ Inheritance

## Goal

Study **Classes နဲ့ Inheritance** using the provided `Kotlin for Flutter Developers` module as the single source for this course.

## Lessons

### 4.1 Class Declaration

**Kotlin:**
```kotlin
class Person(val firstName: String, val lastName: String, var age: Int) {
    
    fun fullName(): String = "$firstName $lastName"
    
    fun birthday() {
        age++
    }
}

// Instance create
val person = Person("Aung", "Kyaw", 25)
println(person.fullName())
person.birthday()
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
class Person {
    final String firstName;
    final String lastName;
    int age;
    
    Person(this.firstName, this.lastName, this.age);
    
    String fullName() => "$firstName $lastName";
    
    void birthday() {
        age++;
    }
}

final person = Person("Aung", "Kyaw", 25);
```

> 💡 **Kotlin advantage:** Primary constructor မှာပဲ `val`/`var` ထည့်ရင် property declaration + initialization တပြိုင်နက် ပြီးတယ်။ Dart ထက် code နည်းတယ်။

---

### 4.2 init Block

Constructor ထဲမှာ code run ချင်ရင် `init` block သုံးတယ်။

```kotlin
class User(val name: String, val email: String) {
    
    init {
        require(name.isNotBlank()) { "Name cannot be blank" }
        require(email.contains("@")) { "Invalid email format" }
        println("User created: $name")
    }
}
```

---

### 4.3 Inheritance

Kotlin မှာ class တွေ default ကတည်းက `final` ဖြစ်တယ် — extend လုပ်ချင်ရင် `open` keyword ထည့်ရတယ်။

**Kotlin:**
```kotlin
open class Shape(val color: String) {
    open fun area(): Double = 0.0
    open fun describe() = "Shape with color $color"
}

class Circle(color: String, val radius: Double) : Shape(color) {
    override fun area() = Math.PI * radius * radius
    override fun describe() = "Circle — radius: $radius, ${super.describe()}"
}

class Rectangle(color: String, val width: Double, val height: Double) : Shape(color) {
    override fun area() = width * height
}
```

**Dart (Flutter) နဲ့ နှိုင်းယှဉ်:**
```dart
class Shape {
    final String color;
    Shape(this.color);
    
    double area() => 0.0;
    String describe() => "Shape with color $color";
}

class Circle extends Shape {
    final double radius;
    Circle(super.color, this.radius);
    
    @override
    double area() => 3.14159 * radius * radius;
}
```

> 💡 **Key difference:** Kotlin မှာ extend လုပ်ချင်ရင် parent class က `open` ဖြစ်ရမယ်။ Override ပြုလုပ်တဲ့ function မှာ `override` keyword မဖြစ်မနေ ထည့်ရတယ် — forget ဖြစ်ရင် compiler error ရတယ်။ Dart ထက် safer ဖြစ်တယ်။

---

### 4.4 Interfaces

```kotlin
interface Clickable {
    fun onClick()
    fun onLongClick() {
        println("Long clicked!")   // default implementation ပေးလို့ရ
    }
}

interface Focusable {
    fun onFocus()
}

// multiple interfaces implement လုပ်လို့ရ
class Button : Clickable, Focusable {
    override fun onClick() {
        println("Button clicked!")
    }
    
    override fun onFocus() {
        println("Button focused!")
    }
}
```

---

## Flutter Bridge

This module already compares Kotlin with Dart/Flutter. Use those comparisons as the main bridge when reading Android native code, Flutter plugin code, or Kotlin examples inside Android SDK documentation.

## Practice

1. Re-type one Kotlin example from this module and run through the meaning line by line.
2. Write the matching Dart/Flutter version shown in the module, then note the syntax differences.
3. Pick one idea from this module and describe where it could appear in a Flutter Android plugin.

## Q&A Checkpoint

- What part of **Classes နဲ့ Inheritance** feels closest to Dart or Flutter?
- What syntax difference from this module should I remember when reading Kotlin code?
- Where would this module appear in real Flutter + Android native work?

## Exam

### Multiple Choice

1. The main topic of this course is:
   - A. Classes နဲ့ Inheritance
   - B. CSS layout only
   - C. SQL indexes only
   - D. Figma export settings
2. A good way for a Flutter developer to learn this module is to:
   - A. Compare the Kotlin examples with the Dart/Flutter examples in the lesson
   - B. Ignore all Dart comparisons
   - C. Memorize Android Studio shortcuts only
   - D. Skip all code samples

### Fill In The Blank

1. One important term from this module is ____.
2. Another lesson topic from this module is ____.

### Coding Exam

Write a small Kotlin snippet that demonstrates one idea from **Classes နဲ့ Inheritance**. Add a short comment explaining the Dart/Flutter comparison from the module.
