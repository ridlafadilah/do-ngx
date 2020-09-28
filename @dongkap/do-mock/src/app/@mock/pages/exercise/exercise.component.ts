import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { TableColumn } from '@swimlane/ngx-datatable';
import {
  RadioModel,
  CheckboxModel,
  SelectResponseModel,
  Keyword,
  DatatableFilter,
} from '@dongkap/ngx-common';
import { APIModel, API, HttpBaseModel } from '@dongkap/ngx-core';

@Component({
  selector: 'ngx-exercise',
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
  dataSelect: SelectResponseModel[] = [
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
    { name: 'Code', prop: 'cityCode', width: 50, frozenLeft: true },
    { name: 'City', prop: 'cityName', width: 200, frozenLeft: true },
    { name: 'Province', prop: 'provinceName' },
    { name: 'Created', prop: 'createdBy' },
    { name: 'Created Date', prop: 'createdDate' },
    { name: 'Modified', prop: 'modifiedBy' },
    { name: 'Modified Date', prop: 'modifiedDate' },
    { name: 'Active', prop: 'active' },
  ];
  apiPath: HttpBaseModel;
  formGroupFilter: FormGroup;
  filters: DatatableFilter[];
  keyword: Keyword;
  nodes: any[] = [
    { label: 'Node 1' },
    {
        label: 'Node 2',
        expandable: true,
        expanded: true,
        children: [
          { label: 'Node 1' },
          { label: 'Node 2' },
          {
            label: 'Node 3',
            expanded: false,
            expandable: true,
            children: [
              { label: 'Node 1' },
              { label: 'Node 2' },
              { label: 'Node 3' },
              { label: 'Node 4' },
            ],
          },
          {
            label: 'Node 4',
            expandable: true,
            expanded: true,
            children: [
              { label: 'Node 1' },
              { label: 'Node 2' },
              { label: 'Node 3' },
              { label: 'Node 4' },
            ],
          },
        ],
    },
    { label: 'Node 3' },
    {
      label: 'Node 4',
      children: [
        { label: 'Node 1' },
        { label: 'Node 2' },
        { label: 'Node 3' },
        { label: 'Node 4' },
      ],
      expandable: true,
    },
  ];

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder,
    public _d: DomSanitizer) {
      this.formGroupFilter = this.formBuilder.group({
        'cityCode': [],
        'cityName': [],
        'provinceName': [],
      });
      this.filters = [
        { controlName: 'cityCode', type: 'input' },
        { controlName: 'cityName', type: 'input' },
        { controlName: 'provinceName', type: 'input' }];
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
        'select': [{
            label: 'number',
        }],
        'textarea': [{
          value: 'Textarea',
          disabled: false,
        },
        [Validators.minLength(this.minLength)]],
        'ckeditor': [{
          value: '<p>CKEditor</p>',
          disabled: true,
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
