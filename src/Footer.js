import React from 'react'

function Footer() {
  return (
    <div><footer class="bg-light text-black text-center py-4">
    <div class="container">
    <div class="row">
    <div class="col-md-6">
    <h5 class="con">Contact Information</h5>
    <p>Email: sainathreddyrendla@gmail.com</p>
    <p>Phone:7013371627</p>
    <p>Address:36/231-25-2 chinnachowk Kadapa Andhra pradesh</p>
    </div>
    <div class="col-md-6">
    <h5 class="con">Follow Me</h5>
    <a href="/" class="text-black mx-2"><i class="fab fa-facebook"></i></a>
    <a href="/" class="text-black mx-2"><i class="fab fa-twitter"></i></a>
    <a href="/" class="text-black mx-2"><i class="fab fa-linkedin"></i></a>
    <a href="/" class="text-black mx-2"><i class="fab fa-github"></i></a>
    </div>
    {/* <div class="col-md-4">
    <h5 class="con">Back to Top</h5>
    <button id="back-to-top" class="btn btn-light">↑</button>
    </div> */}
    </div>
    <div class="bg-light">
    <p class="mb-0 text-black">&copy; 2024 RENDLA SAINATH REDDY. All rights reserved.</p>
    </div>
    </div>
    </footer></div>
  )
}

export default Footer