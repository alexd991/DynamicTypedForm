import {FormBuilder, FormGroup, ValidatorFn} from '@angular/forms';
import {inject} from '@angular/core';

export class TypedFormBuilder<T extends Record<string, any> = {}> {
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _form: FormGroup = this._formBuilder.group({}) as unknown as FormGroup<T>;

  public withName(name?: string) {
    this._form.addControl('name', this._formBuilder.control(name));

    return this as unknown as TypedFormBuilder<T & { name: string }>;
  }

  public withEmail(email?: string) {
    this._form.addControl('email', this._formBuilder.control(email));

    return this as unknown as TypedFormBuilder<T & { email: string }>;
  }

  public withAge(age?: number) {
    this._form.addControl('age', this._formBuilder.control(age));

    return this as unknown as TypedFormBuilder<T & { age: number }>;
  }

  public withControl<K extends string, V, NN extends boolean = false>(
    key: K,
    value: V,
    options: { nonNullable?: NN, validators?: ValidatorFn[] } = {}
  ) {
    const { nonNullable, validators } = options;

    this._form.addControl(key, this._formBuilder.control(value, {
      nonNullable,
      validators
    }));

    return this as unknown as TypedFormBuilder<T & { [key in K]: NN extends true ? V : V | null }>;
  }

  public build(): FormGroup<T> {
    return this._form;
  }
}

