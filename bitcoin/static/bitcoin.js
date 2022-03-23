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

	function upbit_funcname() { // 선언적 함수.
        var socket1 = new WebSocket("wss://api.upbit.com/websocket/v1"); // new 연산자를 사용하여 WebSocket 타입의 객체를 생성과 동시에 연결.

        socket1.binaryType = 'arraybuffer'; // 웹소켓의 바이너리 포맷을 arraybuffer로 선언. upbit의 기본 binaryType은 blob여서 event.data하면 blob객체가 반환됨.

        socket1.onopen = function() {
            const msg = '[ {"ticket":"UNIQUE_TICKET"}, {"type":"ticker","codes":["KRW-BTC"]} ]'; // 2개의 json 객체를 요소로 가지는 json 배열.

            socket1.send(msg);
        }

        socket1.onmessage = function(event) { // event 객체는 자바스크립트에서 기본적으로 제공해 주는 객체.
            
            var arr = new Uint8Array(event.data); // Uinit8Array 객체를 만듬.
            var str = new TextDecoder("utf-8").decode(arr); // arraybuffer -> string
            // 이대로 출력하면 JSON 객체가 반환됨.

            var js_object = JSON.parse(str); // JSON 객체를 자바스크립트 객체형식으로 변환.
            var upbit_krw = js_object.trade_price; // 체결가
            document.getElementById("upbit-btc").innerHTML = upbit_krw

            var upbit_scr = js_object.signed_change_rate*100; // 전일대비 등락율
            var scr_str = document.getElementById("upbit-btc-scr");
            scr_str.innerHTML = upbit_scr.toFixed(2); // 소수점 둘째 자리까지 반올림.

            $("#upbit-btc").attr("upbit-btc-pr", upbit_krw); // upbit_pr 속성값으로 upbit_krw를 지정.
        }
    }

	upbit_funcname()

	function binance_funcname() {
        var socket2 = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

        socket2.onmessage = function(event){
        var current_price = JSON.parse(event.data);

        var binance_usdt = Math.floor(current_price.p);
        document.getElementById("binance-btc").innerHTML = binance_usdt;
        
        $("#binance-btc").attr("binance-btc-pr", binance_usdt); // binance_pr 속성값으로 binance_usdt를 지정.

        document.title = Math.floor(current_price.p) + "usdt" // title에 바낸 비트코인 가격 표시.
		}
    }

	binance_funcname()
    
    // 김프 계산
    window.setInterval(function(){
        let upbit = $("#upbit-btc").attr("upbit-btc-pr");
        let rates = $("#rates").attr("rates_pr"); // rates_pr 속성값을 cp_rates에 저장.
        let binance = $("#binance-btc").attr("binance-btc-pr");
        let binance_krw = Math.floor(rates*binance);

        let kimp = ((upbit-binance_krw)/binance_krw)*100;
        document.getElementById("btc-kimp").innerHTML = kimp.toFixed(2);

    },10);
    
});





