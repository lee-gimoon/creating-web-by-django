//김프계산: (upbit_krw-krw_pr)/krw_pr*100;

$(document).ready(function(){
    // 환율 api
	$.get("http://api.exchangeratesapi.io/v1/latest?access_key=555fd5a9f04e93dbba51c93977ae0b30&symbol=", function(rate) {
    let base_eur_krw = JSON.stringify(rate.rates.KRW); 
    let base_eur_usd = JSON.stringify(rate.rates.USD);
        
    let exchange_rate = Math.round(base_eur_krw/base_eur_usd); 

    document.getElementById("rates").innerHTML = exchange_rate; 
    $("#rates").attr("rates_pr", exchange_rate); // rates_pr 속성값을 exchange_rate로 변환.
	})

    //비트코인
	function upbit_btc_funcname() { // 선언적 함수.
        let socket = new WebSocket("wss://api.upbit.com/websocket/v1"); // new 연산자를 사용하여 WebSocket 타입의 객체를 생성과 동시에 연결.

        socket.binaryType = 'arraybuffer'; // 웹소켓의 바이너리 포맷을 arraybuffer로 선언. upbit의 기본 binaryType은 blob여서 event.data하면 blob객체가 반환됨.

        socket.onopen = function() {
            const msg = '[ {"ticket":"UNIQUE_TICKET"}, {"type":"ticker","codes":["KRW-BTC"]} ]'; // 2개의 json 객체를 요소로 가지는 json 배열.

            socket.send(msg);
        }

        socket.onmessage = function(event) { // event 객체는 자바스크립트에서 기본적으로 제공해 주는 객체.
            
            let arr = new Uint8Array(event.data); // Uinit8Array 객체를 만듬.
            let str = new TextDecoder("utf-8").decode(arr); // arraybuffer -> string
            // 이대로 출력하면 JSON 객체가 반환됨.

            let js_object = JSON.parse(str); // JSON 객체를 자바스크립트 객체형식으로 변환.
            let upbit_krw = js_object.trade_price; // 체결가
            document.getElementById("upbit-btc").innerHTML = upbit_krw

            let upbit_scr = js_object.signed_change_rate*100; // 전일대비 등락율
            let scr_str = document.getElementById("upbit-btc-scr");
            scr_str.innerHTML = upbit_scr.toFixed(2); // 소수점 둘째 자리까지 반올림.

            $("#upbit-btc").attr("upbit-btc-pr", upbit_krw); // upbit_pr 속성값으로 upbit_krw를 지정.
        }
    }

	upbit_btc_funcname()

	function binance_btc_funcname() {
        let socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

        socket.onmessage = function(event){
        let current_price = JSON.parse(event.data);

        let binance_usdt = Math.floor(current_price.p);
        document.getElementById("binance-btc").innerHTML = binance_usdt;
        
        $("#binance-btc").attr("binance-btc-pr", binance_usdt); // binance_pr 속성값으로 binance_usdt를 지정.

        document.title = Math.floor(current_price.p) + "usdt" // title에 바낸 비트코인 가격 표시.
		}
    }

	binance_btc_funcname()
    
    // 김프 계산
    window.setInterval(function(){
        let upbit = $("#upbit-btc").attr("upbit-btc-pr");
        let rates = $("#rates").attr("rates_pr"); // rates_pr 속성값을 cp_rates에 저장.
        let binance = $("#binance-btc").attr("binance-btc-pr");
        let binance_krw = Math.floor(rates*binance);

        let kimp = ((upbit-binance_krw)/binance_krw)*100;
        document.getElementById("btc-kimp").innerHTML = Math.round(kimp*100)/100; // 소수점 반올림 계산시 Math.round가 가장 빠름.

    },10);
    

    // 이더리움
    function upbit_eth_funcname() { // 선언적 함수.
        let socket = new WebSocket("wss://api.upbit.com/websocket/v1"); // new 연산자를 사용하여 WebSocket 타입의 객체를 생성과 동시에 연결.

        socket.binaryType = 'arraybuffer'; // 웹소켓의 바이너리 포맷을 arraybuffer로 선언. upbit의 기본 binaryType은 blob여서 event.data하면 blob객체가 반환됨.

        socket.onopen = function() {
            const msg = '[ {"ticket":"UNIQUE_TICKET"}, {"type":"ticker","codes":["KRW-ETH"]} ]'; // 2개의 json 객체를 요소로 가지는 json 배열.

            socket.send(msg);
        }

        socket.onmessage = function(event) { // event 객체는 자바스크립트에서 기본적으로 제공해 주는 객체.
            
            let arr = new Uint8Array(event.data); // Uinit8Array 객체를 만듬.
            let str = new TextDecoder("utf-8").decode(arr); // arraybuffer -> string
            // 이대로 출력하면 JSON 객체가 반환됨.

            let js_object = JSON.parse(str); // JSON 객체를 자바스크립트 객체형식으로 변환.
            let upbit_krw = js_object.trade_price; // 체결가
            document.getElementById("upbit-eth").innerHTML = upbit_krw

            let upbit_scr = js_object.signed_change_rate*100; // 전일대비 등락율
            let scr_str = document.getElementById("upbit-eth-scr");
            scr_str.innerHTML = upbit_scr.toFixed(2); // 소수점 둘째 자리까지 반올림.

            $("#upbit-eth").attr("upbit-eth-pr", upbit_krw); // upbit_pr 속성값으로 upbit_krw를 지정.
        }
    }

	upbit_eth_funcname()

	function binance_eth_funcname() {
        let socket = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");

        socket.onmessage = function(event){
        let current_price = JSON.parse(event.data);
        let binance_usdt = Math.round(current_price.p*100)/100;
        document.getElementById("binance-eth").innerHTML = binance_usdt;
        
        $("#binance-eth").attr("binance-eth-pr", binance_usdt); // binance_pr 속성값으로 binance_usdt를 지정.

		}
    }

	binance_eth_funcname()
    
    // 김프 계산
    window.setInterval(function(){
        let upbit = $("#upbit-eth").attr("upbit-eth-pr");
        let rates = $("#rates").attr("rates_pr"); // rates_pr 속성값을 cp_rates에 저장.
        let binance = $("#binance-eth").attr("binance-eth-pr");
        let binance_krw = Math.floor(rates*binance);

        let kimp = ((upbit-binance_krw)/binance_krw)*100;
        document.getElementById("eth-kimp").innerHTML = Math.round(kimp*100)/100;

    },10);


    // 리플
    function upbit_xrp_funcname() { // 선언적 함수.
        let socket = new WebSocket("wss://api.upbit.com/websocket/v1"); // new 연산자를 사용하여 WebSocket 타입의 객체를 생성과 동시에 연결.

        socket.binaryType = 'arraybuffer'; // 웹소켓의 바이너리 포맷을 arraybuffer로 선언. upbit의 기본 binaryType은 blob여서 event.data하면 blob객체가 반환됨.

        socket.onopen = function() {
            const msg = '[ {"ticket":"UNIQUE_TICKET"}, {"type":"ticker","codes":["KRW-XRP"]} ]'; // 2개의 json 객체를 요소로 가지는 json 배열.

            socket.send(msg);
        }

        socket.onmessage = function(event) { // event 객체는 자바스크립트에서 기본적으로 제공해 주는 객체.
            
            let arr = new Uint8Array(event.data); // Uinit8Array 객체를 만듬.
            let str = new TextDecoder("utf-8").decode(arr); // arraybuffer -> string
            // 이대로 출력하면 JSON 객체가 반환됨.

            let js_object = JSON.parse(str); // JSON 객체를 자바스크립트 객체형식으로 변환.
            let upbit_krw = js_object.trade_price; // 체결가
            document.getElementById("upbit-xrp").innerHTML = upbit_krw

            let upbit_scr = js_object.signed_change_rate*100; // 전일대비 등락율
            let scr_str = document.getElementById("upbit-xrp-scr");
            scr_str.innerHTML = upbit_scr.toFixed(2); // 소수점 둘째 자리까지 반올림.

            $("#upbit-xrp").attr("upbit-xrp-pr", upbit_krw); // upbit_pr 속성값으로 upbit_krw를 지정.
        }
    }

	upbit_xrp_funcname()

	function binance_xrp_funcname() {
        let socket = new WebSocket("wss://stream.binance.com:9443/ws/xrpusdt@trade");

        socket.onmessage = function(event){
        let current_price = JSON.parse(event.data);
        let binance_usdt = Math.round(current_price.p*10000)/10000;
        document.getElementById("binance-xrp").innerHTML = binance_usdt;
        
        $("#binance-xrp").attr("binance-xrp-pr", binance_usdt); // binance_pr 속성값으로 binance_usdt를 지정.

		}
    }

	binance_xrp_funcname()
    
    // 김프 계산
    window.setInterval(function(){
        let upbit = $("#upbit-xrp").attr("upbit-xrp-pr");
        let rates = $("#rates").attr("rates_pr"); // rates_pr 속성값을 cp_rates에 저장.
        let binance = $("#binance-xrp").attr("binance-xrp-pr");
        let binance_krw = Math.floor(rates*binance);

        let kimp = ((upbit-binance_krw)/binance_krw)*100;
        document.getElementById("xrp-kimp").innerHTML = Math.round(kimp*100)/100;

    },10);

});





