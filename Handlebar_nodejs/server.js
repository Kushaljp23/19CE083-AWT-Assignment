const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
// configure handlebars
app.engine('hbs',exphbs({
 defaultLayout : 'main', //main handlebar should be displayed when first my website will be loaded
 extname: '.hbs', //we can change extension using extname flags..so here we'll write .hbs extension which we r going to use
})); //instead of exhbs we can use hbs
app.set('view engine','hbs');
// app.get('/',(req,res)=>{
// res.render('home');
// });
app.get('/',function(req,res){
 res.render('home');
});
app.get('/post',function(req,res){
 res.render('productlist',{
 posts:[
 {
 product_id:0,
 productname:'Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)',
 product_type:'Phone📱',
 product_image:'https://images-eu.ssl-images-amazon.com/images/I/419Sb0zGlnL._SX300_SY300_QL70_FMwebp_.jpg',
 product_quantity:'25 Available',
 product_cost:'14999',
 discount:true,
 description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camer
a and 32MP (F2.0) front facing Camera
 6.4-
inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support
 Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to
512GB and dual SIM
 6000 mAh Battery
 1 year manufacturer warranty for device and 6 months manufacturer warranty for inbox accessories including batteries from the date of purchase`
 },
 {
 product_id:1,
 productname:' Sandisk Pendrive',
 product_type:'Electronics',
 product_image:' https://m.media-amazon.com/images/I/419iqDvugpS._SL1200_.jpg',
 product_quantity:'20 Available',
 product_cost:'1000',
 discount:false,
 description:`Pattern name: Cruzer Blade
 \nColour RED & BLACK
 \nMemory Storage Capacity 32 GB
 \nBrand SanDisk
 \nHardware Interface USB 2.0
 \nRead Speed 70 Megabytes Per Second`
 },
 {
 product_id:2,
 productname:`HP Chromebook 14ana0002TU Laptop (Celeron N4020/4GB/64GB SSD/Chrome OS/Integrated Graphics), Ceremic White, 35.6 cm (14 inch)
 Style name:Touchscreen + Ceramic White`,
 product_type:'Laptop',
 product_image:'https://m.media-amazon.com/images/I/61Gnrgw0mrL._SL1080_.jpg',
 product_quantity:'15 Available',
 product_cost:'15000',
 discount:true,
 description:`1.1GHz Intel Celeron N4020 processor
 \n4GB DDR4 RAM
 \n64GB SSD
 \n35.5 cm (14-inch) screen, Intel UHD 600 Graphics
 \nChrome OS operating system
 \n1.46kg laptop`
 },
 {
 product_id:3,
 productname:'Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO | L32M5-AL (Black)',
 product_type:'Television',
 product_image:'https://m.media-amazon.com/images/I/71Z+l05eSIS._SL1188_.jpg',
 product_quantity:'14',
 product_cost:'16,999.00',
 discount:true,
 description:`Resolution: HD Ready Android TV (1366x768) | Refresh Rate: 60 hertz
 \nConnectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other U
SB devices
 \nSound: 20 Watts Output | Dolby+ DTS-HD
 \nSmart TV Features : Built-In WiFi | PatchWall | Netflix | Prime Video | Disney+Hotstar and more | Android TV 9.0 | Google Assistant
 \nDisplay : LED Panel | Vivid Picture engine
 \nWarranty Information: 1 year warranty on product and 1 year extra on
 \nEasy returns: This product is eligible for replacement within 10 days of delivery in case of any product defects, damage or feature
s not matching the description provided`
}, { product_id:4, productname:` JBL Cinema SB231, 2.1 Channel Dolby Digital Soundbar with Wired Subwoofer for Deep Bass, Home Theatre with Remote, HDMI ARC, Bluetooth & Optical`, product_type:'Home Theater', product_image:'https://m.media-amazon.com/images/I/71VUurS4ByL._SL1500_.jpg', product_quantity:'19', product_cost:'1500', discount:false, description:` Connectivity Technology Wireless, Bluetooth, HDMI \nSpeaker Type Soundbar \nBrand JBL \nModel Name Cinema SB231 \nRecommended Uses For Product For Computers, For Smartphones or Tablets \nAbout this item \n110 Watt Output Powerful 2.1 Channel Soundbar with wired Subwoofer \nSubwoofer for Deep and Thrilling Bass` }, { product_id:5, productname:'Samsung Galaxy M21 2021 Edition (Arctic Blue, 4GB RAM, 64GB Storage) | FHD+ sAMOLED |', product_type:'Phone📱', product_image:'https://m.media-amazon.com/images/I/811lrGbXwIL._SL1500_.jpg', product_quantity:'25 Available', product_cost:'12500', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:6, productname:'Fastrack Tees Analog Black Dial Unisex-Adult Watch', product_type:'Watch📱', product_image:'https://m.media-amazon.com/images/I/61BYgYml1TL._UL1500_.jpg', product_quantity:'25 Available', product_cost:'795', discount:true, description:`Dial Color: Black, Case Shape: Round, Case Material: Plastic Case Diameter: 56 millimeters, Recommended for customers looking for a large dial sized watches Band Color: Black, Band Material: Plastic Watch Movement Type: Quartz, Watch Display Type: Analog 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:7, productname:'Samsung Galaxy M42 5G (Prism Dot Gray, 8GB RAM, 128GB Storage)', product_type:'Phone📱', product_image:'https://m.media-amazon.com/images/I/71bmFRQaYCL._SL1500_.jpg', product_quantity:'25 Available', product_cost:'23999', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:8, productname:'Fastrack Analog White Dial Unisex Watch-NG38021PP10W / NG38021PP10W', product_type:'Watch📱', product_image:'https://m.media-amazon.com/images/I/91VEPukVjxL._UL1500_.jpg', product_quantity:'25 Available', product_cost:'780', discount:true, description:`Dial Color: Black, Case Shape: Round, Case Material: Plastic Case Diameter: 56 millimeters, Recommended for customers looking for a large dial sized watches Band Color: Black, Band Material: Plastic Watch Movement Type: Quartz, Watch Display Type: Analog 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:9, productname:'Samsung Guru 1200 (Gold)', product_type:'Phone📱', product_image:'https://m.media-amazon.com/images/I/71bjLBZBAoL._SY741_.jpg', product_quantity:'25 Available', product_cost:'1499', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery
1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:10, productname:'OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)', product_type:'Phone📱', product_image:"https://images-eu.ssl-images-amazon.com/images/I/41e1JcORdNS._SX300_SY300_QL70_FMwebp_.jpg", product_quantity:'25 Available', product_cost:'25000', discount:true, description:` Model Name Guru 1200 \nWireless Carrier Unlocked for All Carriers \nBrand Samsung \nForm factor Candybar Phone \nColour Gold \n1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:11, productname:'Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)', product_type:'Phone📱', product_image:'https://images-eu.ssl-images-amazon.com/images/I/419Sb0zGlnL._SX300_SY300_QL70_FMwebp_.jpg', product_quantity:'25 Available', product_cost:'14999', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:5, productname:'Samsung Galaxy M21 2021 Edition (Arctic Blue, 4GB RAM, 64GB Storage) | FHD+ sAMOLED |', product_type:'Phone📱', product_image:'https://m.media-amazon.com/images/I/811lrGbXwIL._SL1500_.jpg', product_quantity:'25 Available', product_cost:'12500', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:6, productname:'Fastrack Tees Analog Black Dial Unisex-Adult Watch', product_type:'Watch📱', product_image:'https://m.media-amazon.com/images/I/61BYgYml1TL._UL1500_.jpg', product_quantity:'25 Available', product_cost:'795', discount:true, description:`Dial Color: Black, Case Shape: Round, Case Material: Plastic Case Diameter: 56 millimeters, Recommended for customers looking for a large dial sized watches Band Color: Black, Band Material: Plastic Watch Movement Type: Quartz, Watch Display Type: Analog 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:7, productname:'Samsung Galaxy M42 5G (Prism Dot Gray, 8GB RAM, 128GB Storage)', product_type:'Phone📱', product_image:'https://m.media-amazon.com/images/I/71bmFRQaYCL._SL1500_.jpg', product_quantity:'25 Available', product_cost:'23999', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:8, productname:'Fastrack Analog White Dial Unisex Watch-NG38021PP10W / NG38021PP10W', product_type:'Watch📱', product_image:'https://m.media-amazon.com/images/I/91VEPukVjxL._UL1500_.jpg', product_quantity:'25 Available', product_cost:'780', discount:true, description:`Dial Color: Black, Case Shape: Round, Case Material: Plastic Case Diameter: 56 millimeters, Recommended for customers looking for a large dial sized watches Band Color: Black, Band Material: Plastic Watch Movement Type: Quartz, Watch Display Type: Analog
1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:9, productname:'Samsung Guru 1200 (Gold)', product_type:'Phone📱', product_image:'https://m.media-amazon.com/images/I/71bjLBZBAoL._SY741_.jpg', product_quantity:'25 Available', product_cost:'1499', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:10, productname:'OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)', product_type:'Phone📱', product_image:"https://images-eu.ssl-images-amazon.com/images/I/41e1JcORdNS._SX300_SY300_QL70_FMwebp_.jpg", product_quantity:'25 Available', product_cost:'25000', discount:true, description:` Model Name Guru 1200 \nWireless Carrier Unlocked for All Carriers \nBrand Samsung \nForm factor Candybar Phone \nColour Gold \n1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:11, productname:'Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)', product_type:'Phone📱', product_image:'https://images-eu.ssl-images-amazon.com/images/I/419Sb0zGlnL._SX300_SY300_QL70_FMwebp_.jpg', product_quantity:'25 Available', product_cost:'14999', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:12, productname:' Sandisk Pendrive', product_type:'Electronics', product_image:' https://m.media-amazon.com/images/I/419iqDvugpS._SL1200_.jpg', product_quantity:'20 Available', product_cost:'1000', discount:false, description:`Pattern name: Cruzer Blade \nColour RED & BLACK \nMemory Storage Capacity 32 GB \nBrand SanDisk \nHardware Interface USB 2.0 \nRead Speed 70 Megabytes Per Second` }, { product_id:13, productname:`HP Chromebook 14a-na0002TU Laptop (Celeron N4020/4GB/64GB SSD/Chrome OS/Integrated Graphics), Ceremic White, 35.6 cm (14 inch) Style name:Touchscreen + Ceramic White`, product_type:'Laptop', product_image:'https://m.media-amazon.com/images/I/61Gnrgw0mrL._SL1080_.jpg', product_quantity:'15 Available', product_cost:'15000', discount:true, description:`1.1GHz Intel Celeron N4020 processor \n4GB DDR4 RAM \n64GB SSD \n35.5 cm (14-inch) screen, Intel UHD 600 Graphics \nChrome OS operating system \n1.46kg laptop` }, { product_id:14, productname:'Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO | L32M5-AL (Black)', product_type:'Television', product_image:'https://m.media-amazon.com/images/I/71Z+l05eSIS._SL1188_.jpg', product_quantity:'14', product_cost:'16,999.00', discount:true, description:`Resolution: HD Ready Android TV (1366x768) | Refresh Rate: 60 hertz \nConnectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices \nSound: 20 Watts Output | Dolby+ DTS-HD \nSmart TV Features : Built-In Wi-Fi | PatchWall | Netflix | Prime Video | Disney+Hotstar and more | Android TV 9.0 | Google Assistant \nDisplay : LED Panel | Vivid Picture engine
\nWarranty Information: 1 year warranty on product and 1 year extra on \nEasy returns: This product is eligible for replacement within 10 days of delivery in case of any product defects, damage or features not matching the description provided` }, { product_id:15, productname:` JBL Cinema SB231, 2.1 Channel Dolby Digital Soundbar with Wired Subwoofer for Deep Bass, Home Theatre with Remote, HDMI ARC, Bluetooth & Optical`, product_type:'Home Theater', product_image:'https://m.media-amazon.com/images/I/71VUurS4ByL._SL1500_.jpg', product_quantity:'19', product_cost:'1500', discount:false, description:` Connectivity Technology Wireless, Bluetooth, HDMI \nSpeaker Type Soundbar \nBrand JBL \nModel Name Cinema SB231 \nRecommended Uses For Product For Computers, For Smartphones or Tablets \nAbout this item \n110 Watt Output Powerful 2.1 Channel Soundbar with wired Subwoofer \nSubwoofer for Deep and Thrilling Bass` }, { product_id:16, productname:'Samsung Galaxy M21 2021 Edition (Arctic Blue, 4GB RAM, 64GB Storage) | FHD+ sAMOLED |', product_type:'Phone📱', product_image:'https://m.media-amazon.com/images/I/811lrGbXwIL._SL1500_.jpg', product_quantity:'25 Available', product_cost:'12500', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:17, productname:'Fastrack Tees Analog Black Dial Unisex-Adult Watch', product_type:'Watch📱', product_image:'https://m.media-amazon.com/images/I/61BYgYml1TL._UL1500_.jpg', product_quantity:'25 Available', product_cost:'795', discount:true, description:`Dial Color: Black, Case Shape: Round, Case Material: Plastic Case Diameter: 56 millimeters, Recommended for customers looking for a large dial sized watches Band Color: Black, Band Material: Plastic Watch Movement Type: Quartz, Watch Display Type: Analog 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:18, productname:'Samsung Galaxy M42 5G (Prism Dot Gray, 8GB RAM, 128GB Storage)', product_type:'Phone📱', product_image:'https://m.media-amazon.com/images/I/71bmFRQaYCL._SL1500_.jpg', product_quantity:'25 Available', product_cost:'23999', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:19, productname:'Fastrack Analog White Dial Unisex Watch-NG38021PP10W / NG38021PP10W', product_type:'Watch📱', product_image:'https://m.media-amazon.com/images/I/91VEPukVjxL._UL1500_.jpg', product_quantity:'25 Available', product_cost:'780', discount:true, description:`Dial Color: Black, Case Shape: Round, Case Material: Plastic Case Diameter: 56 millimeters, Recommended for customers looking for a large dial sized watches Band Color: Black, Band Material: Plastic Watch Movement Type: Quartz, Watch Display Type: Analog 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:21, productname:'Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)', product_type:'Phone📱', product_image:'https://images-eu.ssl-images-amazon.com/images/I/419Sb0zGlnL._SX300_SY300_QL70_FMwebp_.jpg', product_quantity:'25 Available', product_cost:'14999', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support
Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:22, productname:' Sandisk Pendrive', product_type:'Electronics', product_image:' https://m.media-amazon.com/images/I/419iqDvugpS._SL1200_.jpg', product_quantity:'20 Available', product_cost:'1000', discount:false, description:`Pattern name: Cruzer Blade \nColour RED & BLACK \nMemory Storage Capacity 32 GB \nBrand SanDisk \nHardware Interface USB 2.0 \nRead Speed 70 Megabytes Per Second` }, { product_id:23, productname:`HP Chromebook 14a-na0002TU Laptop (Celeron N4020/4GB/64GB SSD/Chrome OS/Integrated Graphics), Ceremic White, 35.6 cm (14 inch) Style name:Touchscreen + Ceramic White`, product_type:'Laptop', product_image:'https://m.media-amazon.com/images/I/61Gnrgw0mrL._SL1080_.jpg', product_quantity:'15 Available', product_cost:'15000', discount:true, description:`1.1GHz Intel Celeron N4020 processor \n4GB DDR4 RAM \n64GB SSD \n35.5 cm (14-inch) screen, Intel UHD 600 Graphics \nChrome OS operating system \n1.46kg laptop` }, { product_id:24, productname:'Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO | L32M5-AL (Black)', product_type:'Television', product_image:'https://m.media-amazon.com/images/I/71Z+l05eSIS._SL1188_.jpg', product_quantity:'14', product_cost:'16,999.00', discount:true, description:`Resolution: HD Ready Android TV (1366x768) | Refresh Rate: 60 hertz \nConnectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices \nSound: 20 Watts Output | Dolby+ DTS-HD \nSmart TV Features : Built-In Wi-Fi | PatchWall | Netflix | Prime Video | Disney+Hotstar and more | Android TV 9.0 | Google Assistant \nDisplay : LED Panel | Vivid Picture engine \nWarranty Information: 1 year warranty on product and 1 year extra on \nEasy returns: This product is eligible for replacement within 10 days of delivery in case of any product defects, damage or features not matching the description provided` }, { product_id:25, productname:` JBL Cinema SB231, 2.1 Channel Dolby Digital Soundbar with Wired Subwoofer for Deep Bass, Home Theatre with Remote, HDMI ARC, Bluetooth & Optical`, product_type:'Home Theater', product_image:'https://m.media-amazon.com/images/I/71VUurS4ByL._SL1500_.jpg', product_quantity:'19', product_cost:'1500', discount:false, description:` Connectivity Technology Wireless, Bluetooth, HDMI \nSpeaker Type Soundbar \nBrand JBL \nModel Name Cinema SB231 \nRecommended Uses For Product For Computers, For Smartphones or Tablets \nAbout this item \n110 Watt Output Powerful 2.1 Channel Soundbar with wired Subwoofer \nSubwoofer for Deep and Thrilling Bass` }, { product_id:26, productname:'Samsung Galaxy M21 2021 Edition (Arctic Blue, 4GB RAM, 64GB Storage) | FHD+ sAMOLED |', product_type:'Phone📱', product_image:'https://m.media-amazon.com/images/I/811lrGbXwIL._SL1500_.jpg', product_quantity:'25 Available', product_cost:'12500', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:27, productname:'Fastrack Tees Analog Black Dial Unisex-Adult Watch', product_type:'Watch📱', product_image:'https://m.media-amazon.com/images/I/61BYgYml1TL._UL1500_.jpg', product_quantity:'25 Available', product_cost:'795', discount:true,
description:`Dial Color: Black, Case Shape: Round, Case Material: Plastic Case Diameter: 56 millimeters, Recommended for customers looking for a large dial sized watches Band Color: Black, Band Material: Plastic Watch Movement Type: Quartz, Watch Display Type: Analog 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:28, productname:'Samsung Galaxy M42 5G (Prism Dot Gray, 8GB RAM, 128GB Storage)', product_type:'Phone📱', product_image:'https://m.media-amazon.com/images/I/71bmFRQaYCL._SL1500_.jpg', product_quantity:'25 Available', product_cost:'23999', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:29, productname:'Fastrack Analog White Dial Unisex Watch-NG38021PP10W / NG38021PP10W', product_type:'Watch📱', product_image:'https://m.media-amazon.com/images/I/91VEPukVjxL._UL1500_.jpg', product_quantity:'25 Available', product_cost:'780', discount:true, description:`Dial Color: Black, Case Shape: Round, Case Material: Plastic Case Diameter: 56 millimeters, Recommended for customers looking for a large dial sized watches Band Color: Black, Band Material: Plastic Watch Movement Type: Quartz, Watch Display Type: Analog 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, { product_id:30, productname:'Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)', product_type:'Phone📱', product_image:'https://images-eu.ssl-images-amazon.com/images/I/419Sb0zGlnL._SX300_SY300_QL70_FMwebp_.jpg', product_quantity:'25 Available', product_cost:'14999', discount:true, description:`Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase` }, ] }); }); app.listen(3000,()=>{ console.log('Listening on port 3000..'); });
