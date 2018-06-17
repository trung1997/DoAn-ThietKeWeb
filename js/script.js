//kiem tra noi dung va email trang tin tuc
 function ValidateForm()
    {
      //Xoa Noi DUng Thong Bao
      $('#thongbaoemail, #thongbaoykien').html('').removeClass('alert alert-danger');
      //noi dung text box menu
      var email = $('#email').val().trim();
      //noi dung binh luan
      var ykien = $('#ykien').val().trim();
      //kiem tra du lieu+
      var dung=(true);
      //kiem tra email la gmail hoac yahoo mail
      if (!email.match(/@((gmail)|(yahoo))\.com(\.vn)?$/))
      {
        $('#thongbaoemail').html('Email của bạn không đúng định dạng yahoo hoặc gmail').addClass('alert alert-danger');
        dung=false;
      }
      if(ykien.length<10 || ykien.length>7000)
      {
        $('#thongbaoykien').html('Nội Dung của bạn phải lớn hơn 10 kí tự').addClass('alert alert-danger');
        dung=false;
      }
      return dung;
    }
//chuyển hình khi click
$( document ).ready(function() {
	$(".a").on('click',function() {
		var v = ($(this).attr("value"));
		$('#myCarousel .active').removeClass('active');
		$('#myCarousel .carousel-item:eq('+v+')').addClass('active');
	});
});
//Register
function resetAlert(){
	arr=$('.alert.alert-danger');
	for(var i=0;i<arr.length;i++)
	{
		arr[i].style.display="none";
	}
}

function showAlert(id,content){
	alert=document.querySelector("#"+id);
	alert.innerText=content;
	alert.style.display="block";
}

function check(){
	var flag=true;
	tendangnhap=$("#tendangnhap")[0].value;
	matkhau=$("#matkhau")[0].value;
	nhaplaimatkhau=$("#nhaplaimatkhau")[0].value;
	sdt=$("#sdt")[0].value;
	gioitinh=$("input[name='gioitinh']:checked").length;
	email=$("#email")[0].value;
	diachi=$("#diachi")[0].value;
	num=$("#avatarView")[0].src.length;
	avatar=$("#avatarView")[0].src[num-1];
	resetAlert();
	if(tendangnhap.length < 4 || tendangnhap.length > 12)
	{
		showAlert("warn_tendangnhap","Tên đăng nhập phải gồm 4-12 ký tự");
		flag=false;
	}

	var rematkhau=/^[a-zA-Z0-9(@*&^%#)]{8,}$/;
	if(rematkhau.test(matkhau)==false)
	{
		showAlert("warn_matkhau","Mật khẩu không hợp lệ");
		flag=false;
	}

	if(nhaplaimatkhau.length < 4 || nhaplaimatkhau.length > 16 || nhaplaimatkhau !== matkhau)
	{
		showAlert("warn_nhaplaimatkhau","Mật khẩu nhập lại chưa chính xác");
		flag=false;
	}

	var resdt=/^0(1\d{9}|9\d{8})$/;
	if(resdt.test(sdt)===false)
	{
		showAlert("warn_sdt","Bạn chưa nhập đúng sdt gồm 10 số");
		flag=false;
	}

	if(gioitinh !== 1)
	{
		showAlert("warn_gioitinh","Bạn chưa chọn giới tính");
		flag=false;
	}
	var reemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(reemail.test(email)===false)
	{
		showAlert("warn_email","Bạn nhập sai định dạng Email");
		flag=false;
	}

	var rediachi = /^[a-zA-Z\s]+$/;
	if(rediachi.test(diachi)===false || diachi.length===0)
	{
		showAlert("warn_diachi","Địa chỉ không hợp lệ");
		flag=false;
	}

	if(avatar === "#")
	{
		showAlert("warn_avatar","Bạn chưa chọn hình đại diện");
		flag=false;
	}

	if(flag===true)
	{
		document.getElementById("outtendangnhap").innerHTML = document.getElementById("tendangnhap").value;

		document.getElementById("outsdt").innerHTML = document.getElementById("sdt").value;

		if(document.querySelector('input[name="gioitinh"]:checked').value === "nam")
			document.getElementById("outgioitinh").innerHTML = "Nam";
		else
			document.getElementById("outgioitinh").innerHTML = "Nữ";

		document.getElementById("outemail").innerHTML = document.getElementById("email").value;

		document.getElementById("outdiachi").innerHTML = document.getElementById("diachi").value;

		document.getElementById("thongtin").style.display = "block";

	}
}

function readURL(input){
	if(input.files && input.files[0]){
		var reader = new FileReader();
		reader.onload=function(e){
			$('#avatarView')
			.attr('src',e.target.result)
			.width(150)
			.height(170);
		};
		reader.readAsDataURL(input.files[0]);
	}
}

//Price
function range () {
	var x = "50%";
				// var y = parseInt(document.getElementsByClassName('gtco-cover')[0].style.backgroundPositionY) + document.documentElement.scrollTop*0.05;

				// document.getElementsByClassName('gtco-cover')[0].style.backgroundPosition = "50% "+y+"px";
			}

//End Price

window.onload=function(){
	resetAlert();
	range();
				$("#range_01").ionRangeSlider({
					type: "double",
					grid: true,
					min: 0,
					max: 1000000,
					from: 10000,
					to: 500000,
					prefix: "đ "
				});
}

//End-register

