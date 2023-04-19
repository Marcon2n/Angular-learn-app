import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent {
  
  // DATA CHÍNH
  dataLesson = {
    angular: [
      // PHẦN 1
      {
        name: "Phần 1: Giới thiệu",
        content: [
          {
            title: "1. Giới thiệu khóa học",
            link: "https://youtube.com/embed/rvxzn2cfFDM",
            download: []
          },
          {
            title: "2. Angular là gì?",
            link: "https://youtube.com/embed/bZhS5POYBSQ",
            download: []
          },
          {
            title: "3. Tham gia cộng đồng học online",
            link: "../../assets/003.pdf",
            download: []
          },
          {
            title: "4. Khác biệt giữa các phiên bản Angular",
            link: "https://youtube.com/embed/nvqbChsPX3I",
            download: []
          },
          {
            title: "5. Tìm hiểu chi tiết về CLI và các lỗi thường gặp",
            link: "../../assets/005.pdf",
            download: []
          },
          {
            title: "6. Cài đặt dự án và Ứng dụng đầu tiên",
            link: "https://youtube.com/embed/3VhLtX-W6OA",
            download: [
              "https://drive.google.com/uc?export=download&id=1MA9I3Lmwxl4I1fbxl_dkoReozKMc6kT3"]
          },
          {
            title: "7. Tùy chỉnh Ứng dụng đầu tiên",
            link: "https://youtube.com/embed/0CIKCN7gvaQ",
            download: [
              "https://drive.google.com/uc?export=download&id=1nmY3PmATL8AvcJqSzwD-QAqe79utq2Jb"
            ]
          },
          {
            title: "8. Cấu trúc của khóa học",
            link: "https://youtube.com/embed/koy8OJ79zBc",
            download: []
          },
          {
            title: "9. Kiến thức sau khi hoàn thành khóa học",
            link: "https://youtube.com/embed/VPx662AZz04",
            download: []
          },
          {
            title: "10. Typescript là gì?",
            link: "https://youtube.com/embed/TBOvILKkycM",
            download: []
          },
          {
            title: "11. Tham khảo: Hướng dẫn nhanh Typescript",
            link: "../../assets/011.pdf",
            download: [

            ]
          },
          {
            title: "12. Hướng dẫn cài đặt Bootstrap cho dự án",
            link: "https://youtube.com/embed/tljLNqnhrLE",
            download: [
              "https://drive.google.com/uc?export=download&id=1NDfNz_-XB9n10hcbVMxRH8cDSb04pc5m"
            ]
          },
          {
            title: "13. Code của khóa học",
            link: "../../assets/013.pdf",
            download: [
              'https://drive.google.com/uc?export=download&id=1aeWBlFOurs8oaXNi0HRLuKIEq7qnDhrY',
              'https://drive.google.com/uc?export=download&id=1aeWBlFOurs8oaXNi0HRLuKIEq7qnDhrY'
            ]
          }
        ]
      },
      // PHẦN 2
      {
        name: "Phần 2: Những vấn đề cơ bản",
        content: [
          {
            title: "14. Nội dung của học phần",
            link: "https://youtube.com/embed/-R_msLdQSM8",
            download: []
          },
          {
            title: "15. Cách thức ứng dụng Angular bắt đầu và chạy trương trình",
            link: "https://youtube.com/embed/HF3qAwihMLM",
            download: []
          },
          {
            title: "16. Sự quan trọng của Component",
            link: "https://youtube.com/embed/cLBUULbnDLU",
            download: []
          },
          {
            title: "17. Tạo Component",
            link: "https://youtube.com/embed/BNbKJ9T5_yQ",
            download: []
          },
          {
            title: "18. Hiểu về vai trò của AppModule và khai báo Component",
            link: "https://youtube.com/embed/WUNQCyMlyfM",
            download: []
          },
          {
            title: "19. Tạo Component thủ công",
            link: "https://youtube.com/embed/5j037MU4sAQ",
            download: []
          },
          {
            title: "20. Tạo Component dựa vào CLI & Nesting",
            link: "https://youtube.com/embed/cKuFa1WrCmA",
            download: []
          },
          {
            title: "21. Thao tác với Component Template",
            link: "https://youtube.com/embed/pLbJWRhGEXI",
            download: []
          },
          {
            title: "22. Thao tác với Component Styles",
            link: "https://youtube.com/embed/Bi1Uh1BhmV4",
            download: []
          },
          {
            title: "23. Tìm hiểu rõ ràng về Component Selector",
            link: "https://youtube.com/embed/tOgYqq3mNro",
            download: [
              'https://drive.google.com/uc?export=download&id=12BvL-nBYrFyrZd08Cpn4imWFUpIqdRCf'
            ]
          },
          {
            title: "Assignment 1: Thực hành với Component",
            link: "https://youtube.com/embed/cN-QD0v0OhE",
            download: []
          },
          {
            title: "24. THAM KHẢO: Hướng dẫn Assignment 1",
            link: "https://youtube.com/embed/m-Xx2HC7UAw",
            download: [
              'https://drive.google.com/uc?export=download&id=1uJ9sBLBl9k_QYrpiMK7Q810vly98b7cs'
            ]
          },
          {
            title: "25. Databinding là gì?",
            link: "https://youtube.com/embed/e0nNnNR-rhk",
            download: []
          },
          {
            title: "26. String Interpolation?",
            link: "https://youtube.com/embed/g9dOlJ63v1I",
            download: []
          },
          {
            title: "27. Property Binding",
            link: "https://youtube.com/embed/q0kobn_LNaM",
            download: []
          },
          {
            title: "28. Property Binding và String Interpolation",
            link: "https://youtube.com/embed/lslW4U8dNdk",
            download: []
          },
          {
            title: "29. Event Binding",
            link: "https://youtube.com/embed/CObDUve6SPI",
            download: []
          },
          {
            title: "30. Các Property và Event có thể Binding",
            link: "../../assets/030.pdf",
            download: []
          },
          {
            title: "31. Truyền và sử dụng Data và Event Binding",
            link: "https://youtube.com/embed/7fLHyG7GF1A",
            download: []
          },
          {
            title: "32. QUAN TRỌNG: Sự cần thiết của FormsModule với việc gán hai chiều",
            link: "../../assets/032.pdf",
            download: []
          },
          {
            title: "33. Gán hai chiều (Two-Way-Databinding)",
            link: "https://youtube.com/embed/8tTQOzusVi8",
            download: []
          },
          {
            title: "34. Kết hợp tất cả Form của Databinding",
            link: "https://youtube.com/embed/AshPr9Rvs8Y",
            download: [
              'https://drive.google.com/file/d/1T3wM7zocnabKtXWXNJZQkw8bkJW_4i-U/view?usp=share_link'
            ]
          },
          {
            title: "Assignment 2: Thực hành Databinding",
            link: "https://youtube.com/embed/ZEh_qO9pA54",
            download: []
          },
          {
            title: "35. THAM KHẢO: Hướng dẫn Assignment 2",
            link: "https://youtube.com/embed/zZJFGRXpRmQ",
            download: [
              'https://drive.google.com/file/d/176fM4AbqfpnSaOnXej0wE5bLUv-JpVPl/view?usp=share_link'
            ]
          },
          {
            title: "36. Tìm hiểu về Directives",
            link: "https://youtube.com/embed/WcvtX_HAOTc",
            download: []
          },
          {
            title: "37. Sử dụng 'ngIf' để tạo điều kiện xuất dữ liệu",
            link: "https://youtube.com/embed/A_q5GrNbo2o",
            download: []
          },
          {
            title: "38. Nâng cao 'ngIf' với điều kiện 'Else'",
            link: "https://youtube.com/embed/Cjz-qF7mGg0",
            download: []
          },
          {
            title: "39. Tạo kiểu động với 'ngStyle'",
            link: "https://youtube.com/embed/XS2okt6as7M",
            download: []
          },
          {
            title: "40. Thêm CSS Class động với 'ngClass'",
            link: "https://youtube.com/embed/MR8CcRxy-hM",
            download: []
          },
          {
            title: "41. Xuất dữ liệu với 'ngFor'",
            link: "https://youtube.com/embed/wt98_0Ncj2A",
            download: []
          },
          {
            title: "Assignment 3: Thực hành Directive",
            link: "https://youtube.com/embed/9ziCKvA2lpk",
            download: []
          },
          {
            title: "42. THAM KHẢO: Hướng dẫn Assignment 3",
            link: "https://youtube.com/embed/GonLqsSBVy8",
            download: [
              'https://drive.google.com/uc?export=download&id=16sePdCyI7mQspF44OracGwrdTI6m5k1T'
            ]
          },
          {
            title: "43. Lấy giá trị Index với 'ngFor'",
            link: "https://youtube.com/embed/LGRfAJESpKA",
            download: [
              'https://drive.google.com/uc?export=download&id=1qNrxjA16ZqHpG67aZMkW7D3WjANFnn6b',
              'https://drive.google.com/uc?export=download&id=1JwKWS_Dc4H5_2HX357-E_z5AlWUroXKC',
              'https://drive.google.com/uc?export=download&id=1inDJzfBt3lhjGKyTXYXhinDOw46jr2vj',
              'https://drive.google.com/uc?export=download&id=1WfxSlk3h-gTj54p5uCw5rR5xvnq98u6W'
            ]
          },
        ]
      },
      // PHẦN 3
      {
        name: "Phần 3: Dự án khóa học - thành phần cơ bản",
        content: [
          {
            title: "44. Giới thiệu về dự án",
            link: "https://youtube.com/embed/OGXsZUTVJU8",
            download: []
          },
          {
            title: "45. Lên kế hoạch thiết kế ứng dụng",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "46. Tạo ứng dụng mới đúng cách",
            link: "../../assets/046.pdf",
            download: []
          },
          {
            title: "47. Cài đặt cho ứng dụng",
            link: "https://youtube.com/embed/Mqt5-nuC7bc",
            download: [
              'https://drive.google.com/uc?export=download&id=17G-_t5u0jgxhSc4AiPDdZSguXFi3ZKar'
            ]
          },
          {
            title: "48. Tạo các Component",
            link: "https://youtube.com/embed/IWkulDilfXw",
            download: []
          },
          {
            title: "49. Sử dụng các Component",
            link: "https://youtube.com/embed/ortCZpcNqLM",
            download: []
          },
          {
            title: "50. Thêm thanh điều hướng",
            link: "https://youtube.com/embed/5W-s_Ryvg-I",
            download: []
          },
          {
            title: "51. Thanh điều hướng thay thế không thể thu gọn",
            link: "../../assets/051.pdf",
            download: []
          },
          {
            title: "52. Tạo Model 'Recipe'",
            link: "https://youtube.com/embed/p0gW1_tgWdY",
            download: []
          },
          {
            title: "53. Tạo nội dung cho các Component Recipe",
            link: "https://youtube.com/embed/-B_z05x3S4k",
            download: []
          },
          {
            title: "54. Xuất thông tin từ Component Recipes với 'ngFor'",
            link: "https://youtube.com/embed/sn9WFieFW9o",
            download: []
          },
          {
            title: "55. Hiển thị Component Recipe Detail",
            link: "https://youtube.com/embed/gikMuuIZrGM",
            download: []
          },
          {
            title: "56. Làm việc với Component ShoppingList",
            link: "https://youtube.com/embed/G6_sxOpYZGs",
            download: []
          },
          {
            title: "57. Tạo Model 'Ingredient'",
            link: "https://youtube.com/embed/6G4BKLgGZm4",
            download: []
          },
          {
            title: "58. Tạo và xuất thông tin từ Component ShoppingList",
            link: "https://youtube.com/embed/AeBRr7y6eLA",
            download: []
          },
          {
            title: "59. Tạo thành phần Shopping List Edit",
            link: "https://youtube.com/embed/8WamPQy2-QQ",
            download: []
          },
          {
            title: "60. Tóm tắt và định hướng tiếp theo",
            link: "https://youtube.com/embed/3OmCjPqZhjU",
            download: [
              'https://drive.google.com/uc?export=download&id=1UX8vxYR5nw1RSIVy7MKtkUl8CUpx8Gkt'
            ]
          }
        ]
      },
      // PHẦN 4
      {
        name: "Phần 4: Debugging",
        content: [
          {
            title: "61. Tìm hiểu về thông báo lỗi của Angular",
            link: "https://youtube.com/embed/cPX8J4-gles",
            download: [
              'https://drive.google.com/uc?export=download&id=1MfWWH4oIieZTeNCuY8YDYriXHrRONLlN'
            ]
          },
          {
            title: "62. Debugging Code trên trình duyệt bằng Sourcemaps",
            link: "https://youtube.com/embed/9_Vxq6QPOsE",
            download: []
          }
        ]
      },
      // PHẦN 5 FINISH
      {
        name: "Phần 5: Tìm hiểu sâu về Component và Data Binding",
        content: [
          {
            title: "63. Nội dung học phần",
            link: "https://youtube.com/embed/o3VhAawtyw8",
            download: [
              'https://drive.google.com/uc?export=download&id=1OwbuhSO9qny-ZjqkN_5CxX6mVaIDPpqM'
            ]
          },
          {
            title: "64. Chia nhỏ dự thành từng Component",
            link: "https://youtube.com/embed/e3-NmpXhqiQ",
            download: []
          },
          {
            title: "65. Tổng quan về Property và Event Binding",
            link: "https://youtube.com/embed/qjan2vLXQ74",
            download: []
          },
          {
            title: "66. Binding Property tùy biến",
            link: "https://youtube.com/embed/zjZVGS3JXy4",
            download: []
          },
          {
            title: "67. Đặt tên cho Property tùy biến",
            link: "https://youtube.com/embed/sL_KPRx9Yus",
            download: []
          },
          {
            title: "68. Binding Event tùy biến",
            link: "https://youtube.com/embed/WGR0K-QvZ0A",
            download: []
          },
          {
            title: "69. Đặt tên cho Event tùy biến",
            link: "https://youtube.com/embed/tyqs6vARM3o",
            download: []
          },
          {
            title: "70. Tóm tắt Property và Event tùy biến",
            link: "https://youtube.com/embed/UfxX3WQJtt4",
            download: []
          },
          {
            title: "71. Tìm hiểu về View Encapsulation",
            link: "https://youtube.com/embed/TJkXxV6Lh8Q",
            download: []
          },
          {
            title: "72. Tiếp tục về View Encapsulation",
            link: "https://youtube.com/embed/W6D1MI72kJU",
            download: []
          },
          {
            title: "73. Sử dụng Local Reference với Templates",
            link: "https://youtube.com/embed/FTef3OqfxYY",
            download: []
          },
          {
            title: "74. @ViewChild() trong Angular 8+",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "75. Tiếp cận Template & DOM với ViewChild()",
            link: "https://youtube.com/embed/cWjS35lRkZw",
            download: []
          },
          {
            title: "76. Nhập nội dung vào Component với 'ng-content'",
            link: "https://youtube.com/embed/_4O0XFPr3mo",
            download: []
          },
          {
            title: "77. Tìm hiểu về vòng đời của Component",
            link: "https://youtube.com/embed/mTfVqI3dBMc",
            download: [
              'https://drive.google.com/uc?export=download&id=19JsGrcAbh4ySyP9Pn779M0bD-cbzc1Xi'
            ]
          },
          {
            title: "78. Tìm hiểu về vòng đời của Hook trong thực tế",
            link: "https://youtube.com/embed/g_SeKi4fvjA",
            download: []
          },
          {
            title: "79. Vòng đời của Hook và Template Access",
            link: "https://youtube.com/embed/bwj9HNCLA3s",
            download: []
          },
          {
            title: "80. @ContentChild() trong Agular 8+",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "81. Tiếp cận 'ng-content' với @ContentChild()",
            link: "https://youtube.com/embed/y9HVh9l5czc",
            download: []
          },
          {
            title: "82. Tóm tắt học phần",
            link: "https://youtube.com/embed/IZiaRpxhwj4",
            download: [
              'https://drive.google.com/uc?export=download&id=1A4b351UIuBmnJWWy30q217cDrfHmGNLO'
            ]
          },
          {
            title: "Assignment 4: Thực hành Property, Event Binding và View Encapsulation",
            link: "https://youtube.com/embed/pEIrrhEjziA",
            download: [
            ]
          },
          {
            title: "83. THAM KHẢO: Hướng dẫn Assignment 4",
            link: "https://youtube.com/embed/eO0Vb592nYI",
            download: [
              'https://drive.google.com/uc?export=download&id=1lsxnXMogl2-Sv7V5k3PVDYU9d079oDWf'
            ]
          }
        ]
      },
      // PHẦN 6 FINISH
      {
        name: "Phần 6: Triển khai dự án khóa học với Component và Data Binding",
        content: [
          {
            title: "84. Giới thiệu học phần",
            link: "https://youtube.com/embed/IR4D8tVixKs",
            download: [
              'https://drive.google.com/uc?export=download&id=1ndRXHE58f3LMLN0jS_QIpsA76HzifvN9'
            ]
          },
          {
            title: "85. Thêm điều hướng bằng Event Binding và ngIf",
            link: "https://youtube.com/embed/PLpzn-sFE1s",
            download: []
          },
          {
            title: "86. Truyền thông tin Recipe bằng Property Binding",
            link: "https://youtube.com/embed/tiNHW2bFNIk",
            download: []
          },
          {
            title: "87. Truyền thông tin bằng cách kết hợp Property và Event Binding",
            link: "https://youtube.com/embed/rZtY5PIHXtg",
            download: []
          },
          {
            title: "88. LƯU Ý: Đảm bảo FormModule đã được thêm",
            link: "../../assets/088.pdf",
            download: []
          },
          {
            title: "89. Cho phép người dùng thêm Ingredients trong Shopping List",
            link: "https://youtube.com/embed/4_41Tckliag",
            download: [
              'https://drive.google.com/uc?export=download&id=1IoBbal_OAG-FJUP8Ute5kYcnfecDu2Wn'
            ]
          }
        ]
      },
      // PHẦN 7 FINISH
      {
        name: "Phần 7: Tìm hiểu sâu về Directive",
        content: [
          {
            title: "90. Giới thiệu học phần",
            link: "https://youtube.com/embed/UY75qcw4r1w",
            download: [
              'https://drive.google.com/uc?export=download&id=1Oaqzb53knmoX-A7SbZaDelPAAvV3sKuf'
            ]
          },
          {
            title: "91. Ôn lại ngIf và ngFor",
            link: "https://youtube.com/embed/THyt5fo1VuU",
            download: [
              'https://drive.google.com/uc?export=download&id=1IpXR_3Te9LA9MlZm39vSGryNMdCt_ZWE'
            ]
          },
          {
            title: "92. Ôn lại ngClass và ngStyle",
            link: "https://youtube.com/embed/PzoHAnF07mk",
            download: []
          },
          {
            title: "93. Tạo thuộc tính cơ bản của Directive",
            link: "https://youtube.com/embed/bE56xsyPdDM",
            download: []
          },
          {
            title: "94. Sử dụng Renderer để xây dựng thuộc tính cho Directive",
            link: "https://youtube.com/embed/AcB9uNOKvq4",
            download: []
          },
          {
            title: "95. Renderer phần 2",
            link: "../../assets/095.pdf",
            download: []
          },
          {
            title: "96. Ghi lại sự kiện bằng HostListener",
            link: "https://youtube.com/embed/-Q09piF1TLA",
            download: []
          },
          {
            title: "97. Gán giá trị với HostBinding",
            link: "https://youtube.com/embed/g5Iv24BRs0E",
            download: []
          },
          {
            title: "98. Gán giá trị cho Directive",
            link: "https://youtube.com/embed/kNm5CezIYh8",
            download: []
          },
          {
            title: "99. Tìm hiểu cơ chế hoạt động của Structural Directive",
            link: "https://youtube.com/embed/HvBNnuXf8gc",
            download: []
          },
          {
            title: "100. Xây dựng Structural Directive",
            link: "https://youtube.com/embed/LkNxxxtyFRU",
            download: []
          },
          {
            title: "101. Tìm hiểu về ngSwitch",
            link: "https://youtube.com/embed/NaihCX4G8GQ",
            download: [
              'https://drive.google.com/uc?export=download&id=1Vx1hUvv33uOFRQ3YA6l3IecDZUt26up3'
            ]
          }
        ]
      },
      // PHẦN 8 FINISH
      {
        name: "Phần 8: Triển khai dự án khóa học với Directive",
        content: [
          {
            title: "102. Xây dựng và sử dụng Dropdown Directive",
            link: "https://youtube.com/embed/NDHBy4JM4TA",
            download: [
              'https://drive.google.com/uc?export=download&id=1bif9Y5bwtyTep4QiXlxS9OmuR9igvkE0'
            ]
          },
          {
            title: "103. Chức năng đóng Dropdown từ bất kì đâu",
            link: "../../assets/103.pdf",
            download: []
          }
        ]
      },
      // PHẦN 9 FINISH
      {
        name: "Phần 9: Sử dụng Service và Dependency Injection",
        content: [
          {
            title: "104. Hướng dẫn học phần",
            link: "https://youtube.com/embed/sxzLpD0AA8E",
            download: [
              'https://drive.google.com/uc?export=download&id=1pmEW_GXvOpyzFMZREB55kd9j2rhvnIX8'
            ]
          },
          {
            title: "105. Sự cần thiết của Service",
            link: "https://youtube.com/embed/Pt35Awk50f8",
            download: [
              'https://drive.google.com/uc?export=download&id=1oeAaPZUF2XBgEkIC8uh9SwE_HVSqgWQp'
            ]
          },
          {
            title: "106. Tạo Logging Service",
            link: "https://youtube.com/embed/MoXMxTHUye8",
            download: []
          },
          {
            title: "107. Gán Logging Service vào Component",
            link: "https://youtube.com/embed/AvSckmVXgmI",
            download: []
          },
          {
            title: "108. Cấu trúc Injection thay thế",
            link: "../../assets/108.pdf",
            download: []
          },
          {
            title: "109. Tạo Data Service",
            link: "https://youtube.com/embed/NBeljDss1pc",
            download: []
          },
          {
            title: "110. Tìm hiểu cấp bậc trong Injector",
            link: "https://youtube.com/embed/48W8IU3V8yI",
            download: []
          },
          {
            title: "111. Cần bao nhiêu Service là đủ?",
            link: "https://youtube.com/embed/BwB3HmRjml8",
            download: []
          },
          {
            title: "112. Gán Service trong Service",
            link: "https://youtube.com/embed/AuyJ29_7j7U",
            download: []
          },
          {
            title: "113. Giao tiếp ngang hàng trong Component bằng Service",
            link: "https://youtube.com/embed/7H4aWnGDje8",
            download: [
              'https://drive.google.com/uc?export=download&id=14oeoowJiE-f23vimjbNThW8E8VRct3A0'
            ]
          },
          {
            title: "114. Phương thức khác để gán Service",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: [
              'https://drive.google.com/uc?export=download&id=1Zv0kMTaBsyDkwBCPXap3jGHvr6PAFr3e'
            ]
          },
          {
            title: "Assignment 5: Thực hành về Service",
            link: "https://youtube.com/embed/8fjiXIKA-_Q",
            download: []
          },
          {
            title: "115. THAM KHẢO: Hướng dẫn Assignment 5",
            link: "https://youtube.com/embed/hc52FnrISd0",
            download: [
              'https://drive.google.com/file/d/1Wxp4l23kvXAxvyncDXX_hFnTTtyO5eWq/view?usp=share_link'
            ]
          }
        ]
      },
      // PHẦN 10 FINISH
      {
        name: "Phần 10: Triển khai dự án khóa học với Service và Dependency Injection",
        content: [
          {
            title: "116. Hướng dẫn học phần",
            link: "https://youtube.com/embed/FtWAxOrr83g",
            download: [
              'https://drive.google.com/uc?export=download&id=1O8VUNg8b1OgEmg0_EXcK_cgW9qXFuTaU'
            ]
          },
          {
            title: "117. Cài đặt Service",
            link: "https://youtube.com/embed/EIpLh-3p7uo",
            download: [
              'https://drive.google.com/uc?export=download&id=1oMr39R8nnmovjoAn7hW9jS1TzuIxWLVi'
            ]
          },
          {
            title: "118. Quản lý Component Recipe với Recipe Service",
            link: "https://youtube.com/embed/8cmfsD69a-E",
            download: []
          },
          {
            title: "119. Tương tác giữa các Component với Service",
            link: "https://youtube.com/embed/slbXNPdfzoo",
            download: []
          },
          {
            title: "120. Thêm Shopping List Service",
            link: "https://youtube.com/embed/Efgv8w_xMkU",
            download: []
          },
          {
            title: "121. Sử dụng Service để gửi thông tin từ A tới B",
            link: "https://youtube.com/embed/GEO5N9cpXgE",
            download: []
          },
          {
            title: "122. Thêm Ingredents vào Recipes",
            link: "https://youtube.com/embed/4DOmSlpAY4s",
            download: []
          },
          {
            title: "123. Sử dụng Service truyền thông tin Ingredents từ Recipes tới Shopping List",
            link: "https://youtube.com/embed/AallG29Z2YE",
            download: [
              'https://drive.google.com/uc?export=download&id=1-x2PvyNln9gIs6ZUk9Qulwgjh5dA4B4v'
            ]
          }
        ]
      },
      // PHẦN 11 chưa có video
      {
        name: "Phần 11: Đổi trang với Routing",
        content: [
          {
            title: "124. Hướng dẫn học phần",
            link: "https://youtube.com/embed/OGXsZUTVJU8",
            download: [
              'https://drive.google.com/uc?export=download&id=1LrSnTrxWuJ-eE9rby5jb1h6YeAVlXjqe'
            ]
          },
          {
            title: "125. Sự cần thiết của Router",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: [
              'https://drive.google.com/uc?export=download&id=171wt4oVR-cP1tmp3yCeNowVuVy4KR60C'
            ]
          },
          {
            title: "126. Tìm hiểu qua ví dụ dự án",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "127. Cấu hình và truyền thông tin cho các Routes",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "128. Điều hướng bằng Router Links",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "129. Tìm hiểu về Navigation Path",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "130. Cài đặt kiểu cho Active Router Link",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "131. Điều hướng theo lập trình",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "132. Đường dẫn tương đối của Programmatic Navigation",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "133. Truyền tham số cho các Routes",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "134. Fetching tham số của Route",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "135. Fetching tham số của Route Reactively",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "136. Lưu ý quan trọng về Route Observables",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "137. Passing Query Parameters and Fragments",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "138. Retrieving Query Parameters and Fragments",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "139. Thực hành và một số vấn đề đạt được",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "140. Cấu hình Child(Nested) Route",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "141. Thực hành sử dụng Query Parameters",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "142. Cấu hình Handling of Query Parameters",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "143. Redirecting and Wildcard Routes",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "144. QUAN TRỌNG: Matching đường dẫn Redirection",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "145. Outsourcing the Route Configuration",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "146. Introduction to Guards",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "147. Protecing Routes with canActive",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "148. Protecting Child(Nest) Routes with canActiveChild",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "149. Using a Fake Auth Service",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "150. Controlling Navigation with canDeactivate",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "151. Passing Static Data to Route",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "152. Resolving Dynamic Data with the resolve Guard",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "153. Understanding Location",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: []
          },
          {
            title: "154. Tổng kết học phần",
            link: "https://youtube.com/embed/jwXnGIB2z40",
            download: [
              'https://drive.google.com/uc?export=download&id=1H-9_hoiG-fDxZpDPJpECr8eQhjphuvQ9'
            ]
          },
        ]
      },
      // PHẦN 12 chưa có video
      {
        name: "Phần 12: Triển khai dự án khóa học với Routing",
        content: [
          {
            title: "155. Hình thành cấu trúc chung",
            link: "https://youtube.com/embed/royI92nUZTg",
            download: []
          },
          {
            title: "156. Cài đặt các Routes",
            link: "https://youtube.com/embed/eU-XfRJe36w",
            download: []
          },
          {
            title: "157. Thêm thanh điều hướng cho ứng dụng",
            link: "https://youtube.com/embed/W3Pg74NdyJw",
            download: []
          },
          {
            title: "158. Ghi dấu các Active Routes",
            link: "https://youtube.com/embed/pHyhz_yUTKQ",
            download: []
          },
          {
            title: "159. Sửa lỗi Load Page",
            link: "https://youtube.com/embed/bL8xSRjj8xg",
            download: []
          },
          {
            title: "160. THỬ THÁCH: Child Routes",
            link: "https://youtube.com/embed/d1hGRiYXLhA",
            download: []
          },
          {
            title: "161. Hướng dẫn thêm Child Routes",
            link: "https://youtube.com/embed/lbj_jsdDNGA",
            download: []
          },
          {
            title: "162. Tùy chỉnh tham số cho Route",
            link: "https://youtube.com/embed/y7HI4ziVUOA",
            download: []
          },
          {
            title: "163. Truyền tham số động vào đường dẫn",
            link: "https://youtube.com/embed/GmaRF_jOacE",
            download: []
          },
          {
            title: "164. Tạo kiểu cho Active Recipe Item",
            link: "https://youtube.com/embed/iaSjUGFiSyg",
            download: []
          },
          {
            title: "165. Thêm đường dẫn cho Editing Route",
            link: "https://youtube.com/embed/kMWcvAkjlgA",
            download: []
          },
          {
            title: "166. Nhận lại tham số của Route",
            link: "https://youtube.com/embed/IOXaB52urps",
            download: []
          },
          {
            title: "167. Thiết lập định hướng cho Edit Page",
            link: "https://youtube.com/embed/bZ7DMKoN3zQ",
            download: []
          },
          {
            title: "168. Lưu ý cho Route Observables",
            link: "https://youtube.com/embed/hb_yoXJ6xkE",
            download: []
          },
          {
            title: "169. Loại bỏ code thừa cho dự án",
            link: "../../assets/169.pdf",
            download: [
              'https://drive.google.com/uc?export=download&id=1K56jCacn6yoT9Ah8u3TGopHYVcxEZAuv'
            ]
          }
        ]
      },
    ]
  }
  dataSelect: any
  @ViewChild('myVideo') myVideo!: ElementRef
  checkLinkDownload = false
  linkDownload: Array<string> = []

  // CHỨC NĂNG CLICK VÀO TỪNG HỌC PHẦN
  onTest(a: any) {
    this.myVideo.nativeElement.src = a.link
    if (a.download.length === 0) {
      this.checkLinkDownload = false
    }
    else {
      this.checkLinkDownload = true
      this.linkDownload.splice(0)
      let test: Array<string> = a.download
      console.log(test[0])
      this.linkDownload.push(...test)
    }
  }

  // CHỨC NĂNG HIỆN DROPDOWN KÈM TRẠNG THÁI CỦA SECTION HEADER
  onToggle(a: any, b: any) 
  {
    if (b.classList[2] === "collapsed") 
    {
      b.classList.remove("collapsed");
      a.classList.add('show')
    }
    else 
    {
    b.classList.add('collapsed');
    a.classList.remove('show')
    }
  }

  // CHỨC NĂNG CHUYỂN TAB GHI CHÚ
  onActive(a: any) {
    a.classList.add('active')
    if (a.id === "btnTab1") 
    {
      document.querySelector('#note')?.classList.add('active', 'show');
      document.querySelector('#download')?.classList.remove('active', 'show');
      document.querySelector('#map')?.classList.remove('active', 'show');
      document.querySelector('#btnTab2')?.classList.remove('active');
      document.querySelector('#btnTab3')?.classList.remove('active');
    }
    else if (a.id === "btnTab2") 
    {
      document.querySelector('#download')?.classList.add('active', 'show');
      document.querySelector('#note')?.classList.remove('active', 'show');
      document.querySelector('#map')?.classList.remove('active', 'show');
      document.querySelector('#btnTab1')?.classList.remove('active');
      document.querySelector('#btnTab3')?.classList.remove('active');
    }
    else 
    {
      document.querySelector('#map')?.classList.add('active', 'show');
      document.querySelector('#note')?.classList.remove('active', 'show');
      document.querySelector('#download')?.classList.remove('active', 'show');
      document.querySelector('#btnTab1')?.classList.remove('active');
      document.querySelector('#btnTab2')?.classList.remove('active');
    }
  }

  
} 
