---
sidebar_position: 2
---

# Check Box


This directory consists of three files.
1. my_checkbox_imports.dart
2. my_checkbox_view_model.dart
3. my_checkbox.dart



### Step 1
First we will set an `inital value: true` in view_model file or controller.
```dart
 /// Set checkbox initial state as true (ie. checked)
  VelocityBloc<bool> isChecked = VelocityBloc<bool>(true);
```

### Step 2
Create an instance of view_model or controller.
```dart
  MyCheckboxViewModel myCheckboxViewModel = MyCheckboxViewModel();
```
Now, we can use `myCheckboxViewModel` instance all over the UI.

### Step 3
The widget we want to change the state, wrap with `BlocBuilder<VelocityBloc<bool>, VelocityState<bool>>` 
with the bloc `myCheckboxViewModel.isChecked`.

### Step 4
We want to change the state of Checkbox Widget as we checked or unchecked the checkbox while pressing the checkbox.
Therefore pass `state.data` as a bool.
```dart
Checkbox(
    value: state.data,
);
```

### Step 5
Now, we need to update the UI as below inside onChanged property.
```dart 
Checkbox(
    onChanged: (value) 
    {
        myCheckboxViewModel.isChecked.onUpdateData(state.data.toggle());
    },
);
```


## Full Example:

### increment_decrement_imports.dart
It consists of all the import files required for all the widgets.
```dart
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:velocity_bloc/velocity_bloc.dart';
import 'package:velocity_x/velocity_x.dart';

part 'my_checkbox.dart';
part 'my_checkbox_view_model.dart';
```

### increment_decrement_view_model.dart
Contains all the controllers or the view models or logics we can say.
```dart
part of 'my_checkbox_imports.dart';

class MyCheckboxViewModel {
  /// Set checkbox initial state as true (ie. checked)
  VelocityBloc<bool> isChecked = VelocityBloc<bool>(true);
}
```

### increment_decrement.dart
This file consists of UIs or we can say Widgets.
```dart
part of 'my_checkbox_imports.dart';

class MyCheckbox extends StatefulWidget {
  const MyCheckbox({super.key, required this.title});

  final String title;

  @override
  State<MyCheckbox> createState() => _MyCheckboxState();
}

class _MyCheckboxState extends State<MyCheckbox> {
  /// Creating an Instance of controller or view_model
  MyCheckboxViewModel myCheckboxViewModel = MyCheckboxViewModel();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Column(
        children: [
          Row(
            children: [
              BlocBuilder<VelocityBloc<bool>, VelocityState<bool>>(
                bloc: myCheckboxViewModel.isChecked,
                builder: (context, state) {
                  return Checkbox(
                    ///state.data holds the current state of checkbox
                    value: state.data,
                    onChanged: (value) {
                      ///when clicked on checkbox, checkbox is updtaed to false if true or true if it is false.
                      ///toggle() handles if true then false, if false then true.
                      myCheckboxViewModel.isChecked
                          .onUpdateData(state.data.toggle());
                    },
                  );
                },
              ),
              "My Checkbox".text.make(),
            ],
          ),
        ],
      ),
    );
  }
}

```