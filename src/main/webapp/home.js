const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const menu = $('.body__menu-items');

const menuPrevBtn = $('.menu__prev-btn');
const menuNextBtn = $('.menu__next-btn');

const topDestination = $('.top-destination__items');
const topDestinationNextBtn = $('.top-destination__next-btn');
const topDestinationPrevBtn = $('.top-destination__prev-btn');

const bestSellerElement = $('#BestSeller');
const bestSellerPrevBtn = $('#best-seller__prev-btn');
const bestSellerNextBtn = $('#best-seller__next-btn');

const bookNowElement = $('#BookNow');
const bookNowPrevBtn = $('#book-now__prev-btn');
const bookNowNextBtn = $('#book-now__next-btn');

const newActivityElement = $('#NewActivity');
const newActitityPrevBtn = $('#new-activity__prev-btn');
const newActitityNextBtn = $('#new-activity__next-btn');

const promotionElement = $('#Promotion');
const promotionPrevBtn = $('#promotion__prev-btn');
const promotionNextBtn = $('#promotion__next-btn');

const datingElement = $('#Dating');
const datingPrevBtn = $('#dating__prev-btn');
const datingNextBtn = $('#dating__next-btn');

const childrenElement = $('#Children');
const childrenPrevBtn = $('#children__prev-btn');
const childrenNextBtn = $('#children__next-btn');

const treeElement = $('.destination-category-tree');
const selectedElement = $('#Selected');



const app = {
    menuItemIcon : [
        {
            img: 'https://res.klook.com/image/upload/v1639126249/brand%20refresh%20category%20icon/desktop/category_36_more_to_explore_l1_all.webp',
            description: 'Tất cả dịch vụ'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126247/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_theme_water_parks.webp',
            description: 'Công viên & công viên nước'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126244/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_camping_glamping.webp',
            description: 'Cắm trại'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126243/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_boat_tours_cruises_yachts.webp',
            description: 'Tour thuyền & du thuyền'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126245/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_museums_exhibitions.webp',
            description: 'Bảo tàng & triển lãm'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126246/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_spa_massages.webp',
            description: 'Spa & massages'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126247/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_thrill_seeking_activities.webp',
            description: 'Trải nghiệm cảm giác mạnh'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126248/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_walking_biking.webp',
            description: 'Tour đi bộ & đạp xe'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126247/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_vehicle_tours.webp',
            description: 'Tour phương tiện'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126243/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_attraction_passes.webp',
            description: 'Vé tham quan'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126246/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_observation_cable_cars.webp',
            description: 'Cáp treo & ngắm cảnh'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126248/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_workshops_cooking_classes.webp',
            description: 'Workshop & học nấu ăn'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126245/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_in_the_air.webp',
            description: 'Tour hàng không'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126245/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_historical_sights.webp',
            description: 'Di tích lịch sử'
        }
    ],
    topDestinationItem : [
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/gagpmpohflexp1kfy9vr.webp',
            name: 'TP. Hồ Chí Minh'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/rxqumcihtzatvhcnbedi.webp',
            name: 'Đà Nẵng'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/cycozeddqrt6cd2agt0n.webp',
            name: 'Nha Trang'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/ysnkhkzabobjbg72x3sz.webp',
            name: 'Hà Nội'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/gavvg3cqxgqveezzzez5.webp',
            name: 'Hội An'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/fdopxuk1tinxvtylpax8.webp',
            name: 'Phú Quốc'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/ktxokazpkmecanujqnzg.webp',
            name: 'Đà Lạt'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/c2fu1xwsbjcu27dzwbxh.webp',
            name: 'Hạ Long'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/ntvxdptpld8qjd9gv01h.webp',
            name: 'Huế'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/pv8gftuu2hmdi7sghimz.webp',
            name: 'Đồng Hới - Quảng Bình'
        },

        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/h4frkpsjdbkbtm5ajtw1.webp',
            name: 'Cần Thơ - ĐB Sông Cửu Long'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/e21jepuleul1fjebaor4.webp',
            name: 'Sapa'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/n1rxvzy9amuwd0oz6etu.webp',
            name: 'Quy Nhơn'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/r2h9wrgikhis4pdubns3.webp',
            name: 'Vũng Tàu'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/m3ilnnn3zfy88sq8hzmf.webp',
            name: 'Mũi Né - Phan Thiết'
        }
    ]
    ,
    bestSeller : [
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85,f_auto/activities/lvnxfcz989rlat8jndf0.webp',
            title: 'Vé Cáp Treo Sun World Ba Na Hills Đà Nẵng',
            rate: 4.7,
            review: '15K+',
            sellPrice: '835,000',
            oldPrice: '850,000',
            hasTag: false
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85,f_auto/activities/oklw8nrqcrhpxz2bjbpv.webp',
            title: 'Vé VinWonders Nha Trang',
            rate: 4.5,
            review: '3,300',
            sellPrice: '200,000',
            oldPrice: '',
            hasTag: true
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85,f_auto/activities/mzefblljuetiycoas1or.webp',
            title: 'Tour Ngày Khám Phá Đồng Bằng Sông Cửu Long, Khởi hành từ Tp. HCM',
            rate: 4.5,
            review: '5,434',
            sellPrice: '510,590',
            oldPrice: '660,062',
            hasTag: true
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85,f_auto/activities/zrx0bcfskdaryfq9sqcf.webp',
            title: 'Vé Cáp Treo Sun World Fansipan Legend',
            rate: 4.8,
            review: '1,907',
            sellPrice: '715,000',
            oldPrice: '737,000',
            hasTag: true
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85,f_auto/activities/plj4bu6khwrkiimbmwnh.webp',
            title: 'Vé Vui Chơi Công Viên Châu Á Đà Nẵng',
            rate: 4.6,
            review: '2,241',
            sellPrice: '95,000',
            oldPrice: '100,000',
            hasTag: true
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85,f_auto/activities/jp6myjn3zt4jdblopcdk.webp',
            title: 'Vé Saigon Skydeck Tại Bitexco Financial Tower',
            rate: 4.8,
            review: '4,339',
            sellPrice: '200,000',
            oldPrice: '',
            hasTag: true
        }
    ]
    ,
    menuCurX: 0,
    topDestinationCurX: 0,
    bestSellerCurX: 0,
    bookNowCurX: 0,
    newActivityCurX: 0,
    promotionCurX: 0,
    datingCurX: 0,
    childrenCurX: 0,
    engSub(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
    }
    ,
    checkDiscounting(item) {
        if(item.oldPrice === '') {
            return false;
        }
        return true;
    },
    displayDiscountAndTag(selector) {
        const collection = selector.children;
        for (let i = 0; i < collection.length; i++) {
            if(collection[i].attributes['is-discounting'].value === "false") {
                collection[i].querySelector('.item-price-box__old-price-box').style.display = 'none';
            }

            if(collection[i].attributes['has-tag'].value == "false") {
                collection[i].querySelector('.item__tagging').style.display = 'none';
            }
        }
    }
    ,
    redirectToSearchPageByKey(formElement) {
        let searchBtn = formElement.querySelector('button');
        let searchInput = formElement.querySelector('input');
        searchBtn.onclick = (e) => {
            e.preventDefault();
            search();
        }

        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                search();
            }
        });

        function search() {
            if(searchInput.value.trim() !== "") {
                let searchValue = app.engSub(searchInput.value).toLowerCase().trim();
                let searchValueArr = searchValue.replace(/\s+/g, ' ').split(' ');
                let url = "";
                searchValueArr.forEach(value => {
                    url += value + '%';
                })
                url = url.slice(0, -1);
                window.location.href = 'search?key=' + url;
            }
        }
    }
    ,
    renderTagOnSearchPage() {
        let nodeList = $$('.tree-list-item__node');
        let tagContentArray = Array.from(nodeList).map((item, index) => {
            if(item.querySelector("input[type='checkbox']").checked === true) {
                return {'nodeIndex': index, 'nodeValue': item.querySelector('span').innerText};
            }
        }, [])

        let tagHtml = tagContentArray.reduce((html, item) => {
            if(item !== undefined) {
                return html + `
                <li class="selected-tag" onclick="deleteSelectedTag(event)" node-index="${item.nodeIndex}">
                    <span>${item.nodeValue}</span> 
                    <i class="ti-close"></i>
                </li>
                `
            }
            return html;

        }, '')
        selectedElement.innerHTML = tagHtml ? tagHtml : '';

    },
    afterFiltering() {
        let searchList = $('#SearchList');
        let activityCount = $('.search-result-container .activity-count span');
        let searhListCollection = searchList.children;

        let count = 0;

        for(let i = 0; i < searhListCollection.length; i++) {
            if(!searhListCollection[i].classList.contains('card--hidden') && !searhListCollection[i].classList.contains('card-place--hidden')) {
                count++;
            }
        }
        activityCount.innerHTML = count;

        let i = 0, visibleCartIndex = 0;
        while(i < searhListCollection.length) {
            if(!searhListCollection[i].classList.contains('card--hidden') && !searhListCollection[i].classList.contains('card-place--hidden')) {
                if((visibleCartIndex + 1) % 3 === 0) {
                    searhListCollection[i].style.marginRight = 0 + 'px';
                }
                visibleCartIndex++;
            }
            i++;
        }
    }
    ,
    renderCartByPlace() {
        let desNodeList = $$('#Destination .tree-list-item__node')
        let cartList = $$('.category-swiper__item-wrapper');

        desNodeList.forEach(node => {
            if(node.querySelector('input').checked) {
                cartList.forEach(cart => {

                    if(!(cart.getAttribute("place-data") === node.querySelector('input').value)) {
                        cart.classList.add('card-place--hidden')
                    }
                })
            }
        })




    },
    removeMarginRight() {
        let cartList = $$('.category-swiper__item-wrapper');
        Array.from(cartList).forEach(cart => {
            if(cart.hasAttribute("style")) {
                cart.removeAttribute("style");
            }
        })
    }
    ,
    renderHomePage() {
        // // Render menu
        // let renderMenu = this.menuItemIcon.reduce(function (html, item, i) {
        //     return html + `
        //             <div class="menu__item hover-effect" menu-item-index=${i}>
        //                 <a href="search.jsp" class="menu__item-link">
        //                     <img src="${item.img}" alt="" class="menu__item-img">
        //                     <span>${item.description}</span>
        //                 </a>
        //             </div>
        //             `
        // }, '')
        // menu.innerHTML = renderMenu;

        // Render top destination items
        // let renderTopDestination = this.topDestinationItem.reduce(function(html, item, i) {
        //     return html + `
        //         <a href="search.jsp" class="top-destination__link ">
        //             <div class="top-destination__item hover-effect" style="background-image: url('${item.img}');">
        //                 <div class="top-destination__item-cover"></div>
        //                 <div class="top-destination__item-text">
        //                     <div class="top-destination__item-title">
        //                         <p>${item.name}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </a>
        //         `
        // }, '')
        // topDestination.innerHTML = renderTopDestination;

        // Render best seller items
        // let renderBestSeller = this.bestSeller.reduce((html, item, i) => {
        //     return html + `
        //         <div class="category-swiper__item-wrapper" has-tag="${item.hasTag}" is-discounting="${this.checkDiscounting(item)}">
        //             <div class="category-swiper__item hover-effect">
        //                 <div class="item__heading" style="background-image: url('${item.img}')"></div>
        //                 <div class="item__body">
        //                     <div class="item__body--top">
        //                         <div class="item__title">
        //                             <span>${item.title}</span>
        //                         </div>
        //                         <div class="item__activity">
        //                             <span class="item__activity-score">
        //                                 <i class="fa-solid fa-star"></i>
        //                                 <span class="activity-score__rate">${item.rate}</span>
        //                             </span>
        //                             <span class="item__activity-review">
        //                                 (
        //                                     <span class="activity-review__number">${item.review}</span>
        //                                 &nbsp;đánh giá)
        //                             </span>
        //                         </div>
        //                     </div>
        //
        //                     <div class="item__body--bottom">
        //                         <div class="item-price-box">
        //                             <span class="item-price-box__sell-price-box">₫ &nbsp<span class="sell-price__value">${item.sellPrice}</span> </span>
        //                             <span class="item-price-box__old-price-box">₫ &nbsp<span class="old-price__value">${item.oldPrice}</span> </span>
        //                         </div>
        //                         <div class="item__tagging-wrapper">
        //                             <div class="item__tagging">
        //                                 <p>Chính sách đảm bảo về giá</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     `
        // }, '');
        // bestSellerElement.innerHTML = renderBestSeller;
        //
        // bookNowElement.innerHTML = renderBestSeller;
        // newActivityElement.innerHTML = renderBestSeller;
        // promotionElement.innerHTML = renderBestSeller;
        // datingElement.innerHTML = renderBestSeller;
        // childrenElement.innerHTML = renderBestSeller;

        this.displayDiscountAndTag(bestSellerElement);
        this.displayDiscountAndTag(bookNowElement);
        this.displayDiscountAndTag(newActivityElement);
        this.displayDiscountAndTag(promotionElement);
        this.displayDiscountAndTag(datingElement);
        this.displayDiscountAndTag(childrenElement);


    },
    renderSearchPage() {
        const searchList = $('#SearchList');

        // Render destination list item
        // let destinationItems = this.topDestinationItem.map(({img, name}) => name);
        // let renderdestinationItems = destinationItems.reduce((html, item, index) => {
        //     return html + `
        //     <label class="tree-list-item__node" for="DesCheckBox-${index}">
        //         <div class="input__check-icon">
        //             <i class="fa-solid fa-check input__check-icon"></i>
        //         </div>
        //         <input type="checkbox" value ="" id="DesCheckBox-${index}" class="appearance-none h-4 w-4 border border-gray-300 hover:border-orange rounded-sm bg-white checked:bg-orange
        //         checked:border-orange focus:outline-none transition duration-200 mt-1 mr-2">
        //         <span>${item}</span>
        //     </label>
        //     `
        // }, '')
        // const treeListItem = $('#Destination');
        // treeListItem.innerHTML = renderdestinationItems;

        // Render category list item
        // let categoryItems = this.menuItemIcon.map(({img, description}) => description);
        // let renderCategoryItems = categoryItems.reduce((html, item, index) => {
        //     return html + `
        //     <label class="tree-list-item__node" for="CategoryCheckBox-${index}">
        //         <div class="input__check-icon">
        //             <i class="fa-solid fa-check input__check-icon"></i>
        //         </div>
        //         <input type="checkbox" value ="" id="CategoryCheckBox-${index}" class="appearance-none h-4 w-4 border border-gray-300 hover:border-orange rounded-sm bg-white checked:bg-orange
        //         checked:border-orange focus:outline-none transition duration-200 mt-1 mr-2">
        //         <span>${item}</span>
        //     </label>
        //     `
        // }, '')
        // const categoryListItem = $('#Category');
        // categoryListItem.innerHTML = renderCategoryItems;

        // Render search list
        // let renderSearchList = this.bestSeller.reduce((html, item, index) => {
        //     return html + `
        //     <a href="/tour?Id" class="category-swiper__item-wrapper" has-tag="${item.hasTag}" is-discounting="${this.checkDiscounting(item)}">
        //         <div class="category-swiper__item hover-effect">
        //             <div class="item__heading" style="background-image: url('${item.img}')">
        //             </div>
        //             <div class="item__body">
        //                 <div class="item__body--top">
        //                     <div class="item__title">
        //                         <span>${item.title}</span>
        //                     </div>
        //                     <div class="item__activity">
        //                         <span class="item__activity-score">
        //                             <i class="fa-solid fa-star"></i>
        //                             <span class="activity-score__rate">${item.rate}</span>
        //                         </span>
        //                         <span class="item__activity-review">
        //                             (
        //                                 <span class="activity-review__number">${item.review}</span>
        //                             &nbsp;đánh giá)
        //                         </span>
        //                     </div>
        //                 </div>
        //
        //                 <div class="item__body--bottom">
        //                     <div class="item-price-box">
        //                         <span class="item-price-box__sell-price-box">₫ &nbsp<span class="sell-price__value">${item.sellPrice}</span> </span>
        //                         <span class="item-price-box__old-price-box">₫ &nbsp<span class="old-price__value">${item.oldPrice}</span> </span>
        //                     </div>
        //                     <div class="item__tagging-wrapper">
        //                         <div class="item__tagging">
        //                             <p>Chính sách đảm bảo về giá</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </a>
        //     `
        // }, '');
        // searchList.innerHTML = renderSearchList;

        // const searhListCollection = searchList.children;
        // for (let i = 0; i < searhListCollection.length; i++) {
        //     if((i + 1) % 3 === 0) {
        //         searhListCollection[i].style.marginRight = 0 + 'px';
        //     }
        // }

        // Display discount and tag on card
        this.displayDiscountAndTag(searchList);

        // // Render activity count
        // const activityCount = $('.search-result-container .activity-count span');
        // activityCount.innerHTML = searchList.children.length;

        // Render selected tag
        this.renderTagOnSearchPage();

        // Render tour by key
        let url = window.location.search
        if(url.includes('key')) {
            let keyArr = url.slice(5).split('%');
            let keyStr = '';
            keyArr.forEach(key => {
                keyStr += key + ' ';
            })
            keyStr = keyStr.trim();
            let cartList = $$('.category-swiper__item-wrapper');
            if(keyStr) {
                Array.from(cartList).forEach(cart => {
                    let cartTitleElement = cart.querySelector('.item__title span');
                    if(!app.engSub(cartTitleElement.innerText).toLowerCase().includes(keyStr)) {
                        cart.classList.add('card--hidden');
                    }
                })
            }
            app.afterFiltering();
        }
        else {
            app.renderCartByPlace();
            app.afterFiltering();
        }
    },

    handleEventHomePage() {

        const menuWidth = menu.offsetWidth;
        const hideMenuNextBtnValue = -(menuWidth -30 - 1176);

        menuPrevBtn.onclick = () => {

            this.swipe(menu, this.menuCurX, 1176);
            this.menuCurX = this.menuCurX + 1176;
            this.disPlaySwipeCardButton(this.menuCurX, menuNextBtn, menuPrevBtn, hideMenuNextBtnValue);


        }

        menuNextBtn.onclick = () => {

            this.swipe(menu, this.menuCurX, -1176);
            this.menuCurX = this.menuCurX - 1176;
            this.disPlaySwipeCardButton(this.menuCurX, menuNextBtn, menuPrevBtn, hideMenuNextBtnValue);

        }

        const topDestinationWidth = topDestination.offsetWidth;
        const hideTDNextBtnValue = -(topDestinationWidth -30 - 1180);

        // Handle event swipe topDestination
        topDestinationNextBtn.onclick = () => {
            this.swipe(topDestination, this.topDestinationCurX, -1180);
            this.topDestinationCurX = this.topDestinationCurX - 1180;
            this.disPlaySwipeCardButton(this.topDestinationCurX, topDestinationNextBtn, topDestinationPrevBtn, hideTDNextBtnValue);


        }

        topDestinationPrevBtn.onclick = () => {
            this.swipe(topDestination, this.topDestinationCurX, 1180);
            this.topDestinationCurX = this.topDestinationCurX + 1180;
            this.disPlaySwipeCardButton(this.topDestinationCurX, topDestinationNextBtn, topDestinationPrevBtn, hideTDNextBtnValue);

        }

        let bestSellerItemAmount = bestSellerElement.querySelectorAll('.category-swiper__item-wrapper').length;
        let bookNowItemAmount = bookNowElement.querySelectorAll('.category-swiper__item-wrapper').length;
        let newActivityItemAmount = newActivityElement.querySelectorAll('.category-swiper__item-wrapper').length;
        let promotionItemAmount = promotionElement.querySelectorAll('.category-swiper__item-wrapper').length;
        let datingItemAmount = datingElement.querySelectorAll('.category-swiper__item-wrapper').length;
        let childrenItemAmount = childrenElement.querySelectorAll('.category-swiper__item-wrapper').length;

        let hideBSNextBtnValue = -(Math.floor(bestSellerItemAmount / 4) * 944);
        let hideBNNextBtnValue = -(Math.floor(bookNowItemAmount / 4) * 944);
        let hideNANextBtnValue = -(Math.floor(newActivityItemAmount / 4) * 944);
        let hidePromotionNextBtnValue = -(Math.floor(promotionItemAmount / 4) * 944);
        let hideDatingNextBtnValue = -(Math.floor(datingItemAmount / 4) * 944);
        let hideChildrenNextBtnValue = -(Math.floor(childrenItemAmount / 4) * 944);

        // Handle event swipe best seller
        bestSellerNextBtn.onclick = () => {
            this.swipe(bestSellerElement, this.bestSellerCurX, -944);
            this.bestSellerCurX = this.bestSellerCurX - 944;
            this.disPlaySwipeCardButton(this.bestSellerCurX, bestSellerNextBtn, bestSellerPrevBtn, hideBSNextBtnValue);
        }

        bestSellerPrevBtn.onclick = () => {
            this.swipe(bestSellerElement, this.bestSellerCurX, 944);
            this.bestSellerCurX = this.bestSellerCurX + 944;
            this.disPlaySwipeCardButton(this.bestSellerCurX, bestSellerNextBtn, bestSellerPrevBtn, hideBSNextBtnValue);
        }

        // Handle event swipe book-now
        bookNowNextBtn.onclick = () => {
            this.swipe(bookNowElement, this.bookNowCurX, -944);
            this.bookNowCurX = this.bookNowCurX - 944;
            this.disPlaySwipeCardButton(this.bookNowCurX, bookNowNextBtn, bookNowPrevBtn, hideBNNextBtnValue);
        }

        bookNowPrevBtn.onclick = () => {
            this.swipe(bookNowElement, this.bookNowCurX, 944);
            this.bookNowCurX = this.bookNowCurX + 944;
            this.disPlaySwipeCardButton(this.bookNowCurX, bookNowNextBtn, bookNowPrevBtn, hideBNNextBtnValue);
        }

        // Handle event swipe new activity
        newActitityNextBtn.onclick = () => {
            this.swipe(newActivityElement, this.newActivityCurX, -944);
            this.newActivityCurX = this.newActivityCurX - 944;
            this.disPlaySwipeCardButton(this.newActivityCurX, newActitityNextBtn, newActitityPrevBtn, hideNANextBtnValue);
        }

        newActitityPrevBtn.onclick = () => {
            this.swipe(newActivityElement, this.newActivityCurX, 944);
            this.newActivityCurX = this.newActivityCurX + 944;
            this.disPlaySwipeCardButton(this.newActivityCurX, newActitityNextBtn, newActitityPrevBtn, hideNANextBtnValue);
        }

        // Handle event swipe promotion
        promotionNextBtn.onclick = () => {
            this.swipe(promotionElement, this.promotionCurX, -944);
            this.promotionCurX = this.promotionCurX - 944;
            this.disPlaySwipeCardButton(this.promotionCurX, promotionNextBtn, promotionPrevBtn, hidePromotionNextBtnValue);
        }

        promotionPrevBtn.onclick = () => {
            this.swipe(promotionElement, this.promotionCurX, 944);
            this.promotionCurX = this.promotionCurX + 944;
            this.disPlaySwipeCardButton(this.promotionCurX, promotionNextBtn, promotionPrevBtn, hidePromotionNextBtnValue);
        }

        // Handle event swipe dating
        datingNextBtn.onclick = () => {
            this.swipe(datingElement, this.datingCurX, -944);
            this.datingCurX = this.datingCurX - 944;
            this.disPlaySwipeCardButton(this.datingCurX, datingNextBtn, datingPrevBtn, hideDatingNextBtnValue);
        }

        datingPrevBtn.onclick = () => {
            this.swipe(datingElement, this.datingCurX, 944);
            this.datingCurX = this.datingCurX + 944;
            this.disPlaySwipeCardButton(this.datingCurX, datingNextBtn, datingPrevBtn, hideDatingNextBtnValue);
        }

        // Handle event swipe children
        childrenNextBtn.onclick = () => {
            this.swipe(childrenElement, this.childrenCurX, -944);
            this.childrenCurX = this.childrenCurX - 944;
            this.disPlaySwipeCardButton(this.childrenCurX, childrenNextBtn, childrenPrevBtn, hideChildrenNextBtnValue);
        }

        childrenPrevBtn.onclick = () => {
            this.swipe(childrenElement, this.childrenCurX, 944);
            this.childrenCurX = this.childrenCurX + 944;
            this.disPlaySwipeCardButton(this.childrenCurX, childrenNextBtn, childrenPrevBtn, hideChildrenNextBtnValue);
        }

        // Handle event click suggestion-filter item
        const filterOptionItem = $$('#SortBySuggestion .filter__option-item');
        filterOptionItem.forEach((item, index) => {
        })

        // Handle event search
        let headerForm = $('#HeaderForm');
        let mainForm = $('#MainForm');
        this.redirectToSearchPageByKey(headerForm);
        this.redirectToSearchPageByKey(mainForm);
    },
    handleEventSearchPage() {
        // Event click node
        let searchList = $('#SearchList');
        let nodeList = $$('.tree-list-item__node');
        let cateNodeList = $$('#Category .tree-list-item__node')
        let desNodeList = $$('#Destination .tree-list-item__node')


        Array.from(nodeList).forEach((node, index) => {
            node.onclick = () => {
                this.removeMarginRight();
                cartList.forEach(cart => {
                    if(cart.classList.contains('card-place--hidden')) {
                        cart.classList.remove('card-place--hidden')
                    }
                })
                app.renderCartByPlace();
                app.afterFiltering()
                app.renderTagOnSearchPage();
                displaySelectedTagElement();



            }
        })




        // Event click 'Clear Selection'
        let clearSelectionBtn = $('.clear-selection-btn');
        clearSelectionBtn.onclick = () => {
            Array.from(selectedElement.children).forEach((tag, index) => {
                tag.click();
            })
        }

        // Handle event change input range
        let sliderOne = document.getElementById("slider-1");
        let sliderTwo = document.getElementById("slider-2");
        let displayValOne = document.getElementById("range1");
        let displayValTwo = document.getElementById("range2");
        let minGap = 0;
        let sliderTrack = document.querySelector(".slider-track");
        let sliderMaxValue = document.getElementById("slider-1").max;
        function slideOne(){



            if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
                sliderOne.value = parseInt(sliderTwo.value) - minGap;

            }
            displayValOne.textContent = sliderOne.value;
            fillColor();
        }
        function slideTwo(){
            if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
                sliderTwo.value = parseInt(sliderOne.value) + minGap;
            }
            displayValTwo.textContent = sliderTwo.value;
            fillColor();
        }
        function fillColor(){
            let percent1 = (sliderOne.value / sliderMaxValue) * 100;
            let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
            sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #ff5b00 ${percent1}% , #ff5b00 ${percent2}%, #dadae5 ${percent2}%)`;
        }
        sliderOne.oninput = slideOne;
        sliderTwo.oninput = slideTwo;


        // Event click accept button
        let priceRangeValue = $('.filter-btn__label');
        let priceRangeElement = $('#PriceFilter');
        let acceptBtn = $('#AcceptBtn');
        let cartList = $$('.category-swiper__item-wrapper');

        acceptBtn.onclick = () => {
            priceRangeValue.textContent = '₫' + `${displayValOne.innerText}` + ' - ' + '₫' + `${displayValTwo.innerText}`;
            priceRangeElement.style.backgroundColor = '#ff5b00';
            priceRangeElement.style.color = '#fff';
            deletePriceFilter();
            this.removeMarginRight();
            let reservePrice = parseInt(displayValOne.innerText);
            let endPrice = parseInt(displayValTwo.innerText);
            Array.from(cartList).forEach(cart => {
                if(cart.style.display !== 'none') {
                    let cartPrice = parseInt(cart.querySelector('.sell-price__value').innerText.split('.').reduce(function(init, value) {
                        return init + value;
                    }, ''));

                    if(cartPrice > endPrice || cartPrice < reservePrice) {
                        cart.classList.add('card--hidden')
                    }
                }
            })
            this.afterFiltering();
        }
        // Event click reset button
        let resetBtn = $('#ResetBtn');
        resetBtn.onclick = () => {
            priceRangeValue.textContent = 'Mức giá';
            priceRangeElement.style.backgroundColor = '#fff';
            priceRangeElement.style.color = '#000';
            sliderOne.value = 0;
            slideOne();
            sliderTwo.value = 500000;
            slideTwo();
            deletePriceFilter();
            this.removeMarginRight();
            this.afterFiltering();
        }

        function deletePriceFilter() {
            Array.from(cartList).forEach(cart => {
                if(cart.classList.contains('card--hidden')) {
                    cart.classList.remove('card--hidden');
                }
            })
        }



        // Handle event search
        let headerFrom = $('#HeaderForm');
        this.redirectToSearchPageByKey(headerFrom);



    },
    renderCartPage() {
        let cartItemList = $$('.cart_item');
        let totalAmountElement = $('#totalAmountNumber');
        let totalPriceElement = $('#totalPrice');
        let cartItemArray = Array.from(cartItemList);
        let totalBill = 0;
        let totalAmount = 0;
        let priceDouble = 0;

        cartItemList.forEach(item => {
            if (item.querySelector('input').checked) {
                priceDouble = (item.querySelector('.item-price').innerText).replace(/,/g, "");
                totalAmount++;
                // totalBill += parseFloat(item.querySelector('.item-price').innerText);
                totalBill += parseFloat(priceDouble);
            }
        })

        totalAmountElement.innerText =totalAmount.toLocaleString();
        totalPriceElement.innerText =totalBill.toLocaleString();
    }
    ,

    handleEventCartPage() {
        let allCheckBox = $('#AllCheckbox');
        let deleteAllTag = $('.delete-all');
        let itemCheckBoxList = $$('.item-checkbox')
        let deleteItemTagList = $$('.delete-item');
        let itemCheckboxArray = Array.from(itemCheckBoxList);
        // let cartItemList = $$('.cart_item');
        // let totalAmountElement = $('#totalAmountNumber');
        // let totalPriceElement = $('#totalPrice');

        // Handle event click all-checkbox
        allCheckBox.onclick = () => {
            if(allCheckBox.checked) {
                itemCheckBoxList.forEach(item => {
                    if(!item.checked) {
                        item.checked = true;
                    }
                })
                app.renderCartPage();
            }
            else {
                itemCheckBoxList.forEach(item => {
                    item.checked = false;
                })
                app.renderCartPage();
            }

        }

        // Handle event click delete all tag
        deleteAllTag.onclick = () => {
            if (itemCheckboxArray.some(item => item.checked)) {
                let items = [];
                itemCheckBoxList.forEach(item => {
                    if (item.checked) {
                        items.push(item.id);
                        item.closest('.cart_item').remove();
                    }
                })
                sendDeleteAllItemsRequest(items);
                itemCheckBoxList.forEach(item => (item.checked = false));
            }
            app.renderCartPage();
        }

        // Handle event click delete item tag
        deleteItemTagList.forEach(item => {
            item.onclick = () => {
                sendDeleteItemRequest(item.id);
                item.closest('.cart_item').remove();
            }
        })

        itemCheckBoxList.forEach(item => {
            item.onchange = () => {
                app.renderCartPage();
            }
        })
        //Fuction send request delete all item to CartController
        function sendDeleteAllItemsRequest(items){
            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/Web_Project_MVC-1.0-SNAPSHOT/cart', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            const params = items.map(id => `deleteAll=${encodeURIComponent(id)}`).join('&');
            console.log("items:", items);
            console.log("params:", params);
            xhr.send(params);
        }
        //Function send request delete item to CartController
        function sendDeleteItemRequest(userTourBookId){
            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/Web_Project_MVC-1.0-SNAPSHOT/cart', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            const params = 'deleteItem=' + encodeURIComponent(userTourBookId);
            console.log(userTourBookId);
            xhr.send(params);
        }



        // function updatePaymentContent() {
        //     let totalBill = 0;
        //     let totalAmount = 0;
        //     cartItemList.forEach(item => {
        //         if(item.querySelector('input').checked) {
        //             totalAmount++;
        //             totalBill += parseInt(item.querySelector('.item-price').innerText);
        //         }
        //     })
        //     totalAmountElement.innerText = totalAmount;
        //     totalPriceElement.innerText = totalBill;
        // }

    },
    swipe(selector, curX, addValue) {
        let newX = curX + addValue;
        selector.style.transform = `translate(${newX}px, 0)`
    }
    ,

    disPlaySwipeCardButton(curX, nextBtn, prevBtn, hiddenNextBtnValue) {
        curX === hiddenNextBtnValue ? nextBtn.style.display = 'none' : nextBtn.style.display = 'flex';
        curX === 0 ? prevBtn.style.display = 'none' : prevBtn.style.display = 'flex';
    },

    startHomePage() {

        this.renderHomePage();
        this.handleEventHomePage();
    },
    startSearchPage() {
        this.renderSearchPage();
        this.handleEventSearchPage();
        displaySelectedTagElement();




    },
    startCartPage() {
        //this.renderCartPage();
        this.handleEventCartPage();
    }
}


function deleteSelectedTag(event) {
    let nodeList = $$('.tree-list-item__node');
    let selectedTagElement = event.target.closest('.selected-tag');
    let nodeIndex = selectedTagElement.attributes['node-index'].value;
    let xCoordOfTree = treeElement.scrollTop;
    nodeList[nodeIndex].click();
    treeElement.scroll(0, xCoordOfTree);

    displaySelectedTagElement();


}

function displaySelectedTagElement() {
    let firstChildOfTreeElement = treeElement.children[0];

    if(!selectedElement.hasChildNodes()) {
        firstChildOfTreeElement.style.display = 'none';
    }
    else {
        firstChildOfTreeElement.style.display = 'block';
    }
}