import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { TableColumn } from '@swimlane/ngx-datatable';
import {
  RadioModel,
  CheckboxModel,
  SelectResponseModel,
  Keyword,
  DatatableFilter,
} from '@dongkap/do-common';
import { HttpBaseModel, HttpMethod } from '@dongkap/do-core';

@Component({
  selector: 'do-exercise',
  styleUrls: ['./exercise.component.scss'],
  templateUrl: './exercise.component.html',
})
export class ExerciseComponent implements OnInit {

  formGroup: FormGroup;
  dataCheckbox: CheckboxModel[] = [
    {
      name: 'Check Box 1',
      selected: false,
    },
    {
      name: 'Check Box 2',
      selected: false,
    },
  ];
  dataCheckboxEdited: CheckboxModel[] = [
    {
      name: 'Check Box 1',
      selected: true,
    },
    {
      name: 'Check Box 2',
      selected: false,
    },
  ];
  dataRadio: RadioModel[] = [
    {
      name: 'Radio 1',
      value: 'Radio 1',
    },
    {
      name: 'Radio 2',
      value: 'Radio 2',
    },
  ];
  dataStaticSelect: SelectResponseModel[] = [
    {
      'label': 'Data',
      'value': '1',
      'disabled': false,
    },
    {
      'label': 'true',
      'value': '2',
      'disabled': false,
    },
    {
      'label': 'number',
      'value': '3',
      'disabled': false,
    },
  ];
  minLength: number = 5;

  rows: any[] = [];
  columns: TableColumn[] = [
    { name: 'Name', prop: 'name', width: 150, frozenLeft: true },
    { name: 'Gender', prop: 'gender', width: 50, frozenLeft: true },
    { name: 'Age', prop: 'age', width: 25, frozenLeft: true },
    { name: 'Company', prop: 'company', width: 200 },
  ];
  apiDatatable: HttpBaseModel = {
    server: {
      protocol: 'http',
      host: 'localhost',
      port: 4242,
    },
    path: '/assets/data/datatable.json',
    method: HttpMethod.GET,
  };
  apiSelect: HttpBaseModel = {
    server: {
      protocol: 'http',
      host: 'localhost',
      port: 4242,
    },
    path: '/assets/data/select.json',
    method: HttpMethod.GET,
  };
  formGroupFilter: FormGroup;
  filters: DatatableFilter[];
  keyword: Keyword;
  nodeItems: any[] = [{
    id: '0',
    name: 'Heros',
    children: [
      {
        id: '1',
        name: 'Batman',
        item: {
          phrase: 'I am the batman'
        }
      },
      {
        id: '2',
        name: 'Superman',
        item: {
          phrase: 'Man of steel'
        }
      }
    ],
    expanded: false
  },
  {
    id: '3',
    name: 'Villains',
    children: [
      {
        id: '4',
        name: 'Joker',
        item: {
          phrase: 'Why so serius'
        }
      },
      {
        id: '5',
        name: 'Lex luthor',
        item: {
          phrase: 'I am the villain of this story'
        }
      }
    ]
  }];

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder,
    public _d: DomSanitizer) {
      this.formGroupFilter = this.formBuilder.group({
        'name': [],
        'gender': [],
        'company': [],
      });
      this.filters = [
        { controlName: 'name', type: 'input' },
        { controlName: 'gender', type: 'input' },
        { controlName: 'company', type: 'input' }];
      this.formGroup = this.formBuilder.group({
        'image': [],
        'username': [{
          value: 'username',
          disabled: true,
        }],
        'currency': ['124124.124'],
        'date': [{
          value: '08/11/2019',
          disabled: false,
        }],
        'checkbox': [this.dataCheckboxEdited],
        'radio': [{
          value: 'Radio 2',
          disabled: false,
        }],
        'searchSelect': [],
        'staticSelect': [{
            label: 'number',
        }],
        'textarea': [{
          value: 'Textarea',
          disabled: false,
        },
        [Validators.minLength(this.minLength)]],
        'ckeditor': [{
          value: '<p>CKEditor</p>',
          disabled: false,
        }],
        'tinyMCE': [{
          value: '<p>TinyMCE</p>',
          disabled: false,
        }],
      });
      this.fetchDatatable((data: any[]) => {
        this.rows = data;
      });
  }

  doFilterAdvanced(keyword: Keyword) {
    this.keyword = keyword;
  }

  fetchDatatable(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/datatable.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

  uploadImage(file: any) {
    console.log(file);
  }

}
