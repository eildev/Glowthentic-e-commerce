@extends('frontend.master')
@section('maincontent')
    <!-- breadcrumb-area-start -->
    <div class="breadcrumb__area pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-breadcrumb__content">
                        <div class="tp-breadcrumb__list">
                            <span class="tp-breadcrumb__active"><a href="{{route('home')}}">Home</a></span>
                            <span class="dvdr">/</span>
                            <span>Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb-area-end -->

    <!-- track-area-start -->
    <section class="track-area pb-40">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-12">
                    <div class="tptrack__product mb-40 mx-auto" style="max-width: 500px;">
                        <div class="tptrack__content grey-bg">
                            <div class="tptrack__item d-flex mb-20">
                                <div class="tptrack__item-icon">
                                    <i class="fal fa-user-unlock"></i>
                                </div>
                                <div class="tptrack__item-content">
                                    <h4 class="tptrack__item-title">Login Here</h4>
                                    <p>Your personal data will be used to support your experience throughout this
                                        website,
                                        to manage access to your account.</p>

                                </div>
                            </div>
                            <div class="d-block mb-20">
                                <a href="{{ route('google.redirect') }}"
                                    class="btn bg-white w-100 text-dark rounded-2 py-2 px-4 border-0">
                                    <img class="img-fluid" style="max-height: 16px;"
                                        src="{{ asset('frontend') }}/assets/img/logo/google.png" alt=""> Log
                                    In
                                    With Google </a>
                                {{-- <a href="{{ route('google.redirect') }}" class="tp-btn"> Login With <i
                                            class="fab fa-facebook-f"></i></a> --}}
                            </div>
                            <form method="POST" action="{{ route('login') }}">
                                @csrf
                                <div class="tptrack__id mb-10">

                                    <span><i class="fal fa-user"></i></span>
                                    <input name="email" type="email" placeholder="Email address">
                                </div>
                                <x-input-error :messages="$errors->get('email')" class="my-2 ms-4 text-danger" />
                                <div class="tptrack__email mb-10">
                                    <span><i class="fal fa-key"></i></span>
                                    <input name="password" type="password" placeholder="Password">
                                    <x-input-error :messages="$errors->get('password')" class="mt-2 text-danger" />
                                </div>
                                <div class="tpsign__remember d-flex align-items-center justify-content-between mb-15">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value=""
                                            id="flexCheckDefault2">
                                        <label class="form-check-label" for="flexCheckDefault2">Remember me</label>
                                    </div>
                                    <div class="tpsign__pass">
                                        <a href="{{ route('password.request') }}">Forget Password</a>
                                    </div>
                                </div>
                                <div class="tptrack__btn">
                                    <button class="tptrack__submition active">Login Now<i
                                            class="fal fa-long-arrow-right"></i></button>
                                </div>
                                <div class="tptrack__btn mt-20">
                                    <p>If You Have'nt an account. Please <a class="text-primary"
                                            href="{{ route('register') }}">Register</a> here.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- track-area-end -->


    <!-- feature-area-start -->
    <section class="feature-area mainfeature__bg pt-50 pb-40"
        data-background="{{ asset('frontend') }}/assets/img/shape/footer-shape-1.svg">
        <div class="container">
            <div class="mainfeature__border pb-15">
                <div class="row row-cols-lg-5 row-cols-md-3 row-cols-2">
                    <div class="col">
                        <div class="mainfeature__item text-center mb-30">
                            <div class="mainfeature__icon">
                                <img src="{{ asset('frontend') }}/assets/img/icon/feature-icon-1.svg" alt="">
                            </div>
                            <div class="mainfeature__content">
                                <h4 class="mainfeature__title">Fast Delivery</h4>
                                <p>Across West & East India</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mainfeature__item text-center mb-30">
                            <div class="mainfeature__icon">
                                <img src="{{ asset('frontend') }}/assets/img/icon/feature-icon-2.svg" alt="">
                            </div>
                            <div class="mainfeature__content">
                                <h4 class="mainfeature__title">safe payment</h4>
                                <p>100% Secure Payment</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mainfeature__item text-center mb-30">
                            <div class="mainfeature__icon">
                                <img src="{{ asset('frontend') }}/assets/img/icon/feature-icon-3.svg" alt="">
                            </div>
                            <div class="mainfeature__content">
                                <h4 class="mainfeature__title">Online Discount</h4>
                                <p>Add Multi-buy Discount </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mainfeature__item text-center mb-30">
                            <div class="mainfeature__icon">
                                <img src="{{ asset('frontend') }}/assets/img/icon/feature-icon-4.svg" alt="">
                            </div>
                            <div class="mainfeature__content">
                                <h4 class="mainfeature__title">Help Center</h4>
                                <p>Dedicated 24/7 Support </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mainfeature__item text-center mb-30">
                            <div class="mainfeature__icon">
                                <img src="{{ asset('frontend') }}/assets/img/icon/feature-icon-5.svg" alt="">
                            </div>
                            <div class="mainfeature__content">
                                <h4 class="mainfeature__title">Curated items</h4>
                                <p>From Handpicked Sellers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- feature-area-end -->
@endsection
