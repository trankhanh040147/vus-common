

var datas;
$.getJSON('file.json', function (data) {
  datas = data;
});

// Lưu trữ các phần tử DOM được sử dụng nhiều lần
var $frmCity = $('#__frm_city');
var $district = $('#district');
var $ward = $('#ward');

// Lưu trữ dữ liệu quận và phường/tổ
var districts = [];
var wards = [];

// Hàm để lấy danh sách quận từ thành phố đã chọn
function getDistricts(city) {
  return datas.filter(function (data) {
    return data[1] === city;
  }).map(function (data) {
    return { name: data[2], code: data[3] };
  }).filter(function (value, index, self) {
    return self.findIndex(function (item) {
      return item.name === value.name && item.code === value.code;
    }) === index;
  });
}

// Hàm để lấy danh sách phường/tổ từ quận đã chọn
function getWards(district) {
  return datas.filter(function (data) {
    return data[3] === district;
  }).map(function (data) {
    return { name: data[4], code: data[5] };
  }).filter(function (value, index, self) {
    return self.findIndex(function (item) {
      return item.name === value.name && item.code === value.code;
    }) === index;
  });
}

// Hàm để thêm các options vào một select element
function addOptions($select, options) {
  $select.empty().removeAttr('disabled');
  options.forEach(function (option) {
    $select.append($('<option>', {
      value: option.code,
      text: option.name,
    }));
  });
  console.log($district.val())
}
// Bắt sự kiện khi người dùng chọn thành phố
$frmCity.change(function () {
  $ward.empty();
  var city = $(this).val();
  districts = getDistricts(city);
  addOptions($district, districts);
  var district = $district.val();
  if (district) {
    wards = getWards(district);
    addOptions($ward, wards);
  }
});

// Bắt sự kiện khi người dùng chọn quận
$district.change(function () {
  var district = $(this).val();
  wards = getWards(district);
  addOptions($ward, wards);
});
