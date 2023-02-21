import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { ProductListService } from 'src/app/core/services/product-list.service';
import { ProductTeaService } from 'src/app/core/services/product-tea.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  orderTitle = 'Сделать заказ';
  isError = false;
  myOrderFormView = true;
  orderForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-z]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[a-zA-z]+$')]],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(11),
        Validators.pattern('^[+]?[0-9]{4}[-s.]?[0-9]{3}[-s.]?[0-9]{4,4}$'),
      ],
    ],
    product: [{ value: '', disabled: true }],
    country: ['', Validators.required],
    address: [
      '',
      [Validators.required, Validators.pattern('/^[.0-9a-zA-Zs,,-[]]+$/gm')],
    ],
    comment: [''],
    zip: ['', [Validators.required]],
  });
  constructor(
    public productTeaService: ProductTeaService,
    public productService: ProductListService,
    private fb: FormBuilder
  ) {
    let title = localStorage.getItem('choosenProductTitle')
      ? localStorage.getItem('choosenProductTitle')
      : '';
    if (title) {
      this.orderForm.patchValue({ product: title });
    }
  }

  ngOnInit() {}

  sendOrderForm() {
    this.orderForm.get('product')?.enable();
    this.productService
      .sendOrder(this.orderForm.value)
      .subscribe((response) => {
        if (response.success) {
          this.myOrderFormView = false;
          this.orderTitle = 'Спасибо за заказ!';
          this.orderForm.get('product')?.disable();
        }
        if (response.success === 0) {
          this.isError = true;
          this.orderForm.get('product')?.disable();
          setTimeout(() => {
            this.isError = false;
          }, 3000);
        }
      });
  }
}
