import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.sass']
})
export class DogsComponent implements OnInit {
  dogImages: string[] = [
    'https://www.dogster.com/wp-content/uploads/2017/11/A-dog-looking-up-confused-nervous-anxious.jpg',
    'https://amp.businessinsider.com/images/5b22c10042e1cc25fc535e38-750-563.jpg',
    'http://images.tritondigitalcms.com/3922/2018/09/24122900/dog.jpg',
    'https://dynaimage.cdn.cnn.com/cnn/w_768,h_1024,c_scale/https%3A%2F%2Fdynaimage.cdn.cnn.com%2Fcnn%2Fx_1229%2Cy_0%2Cw_2712%' +
    '2Ch_3616%2Cc_crop%2Fhttps%253A%252F%252Fstamp.static.cnn.io%252F5b7ac48b4db3d70020c01c13%252Fshutterstock_1081879181.jpg',
  ];
  constructor() { }

  ngOnInit() {
  }

}
