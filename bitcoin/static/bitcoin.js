$.get( "http://api.exchangeratesapi.io/v1/latest?access_key=555fd5a9f04e93dbba51c93977ae0b30&symbol=", function(rate) {
        let base_eur_krw = JSON.stringify(rate.rates.KRW);
        let base_eur_usd = JSON.stringify(rate.rates.USD);
            
        let exchange_rate = Math.round(base_eur_krw/base_eur_usd);

        document.getElementById("rate").innerHTML = exchange_rate;

        function upbit_funcname() {
            var socket1 = new WebSocket("wss://api.upbit.com/websocket/v1"); // new 연산자를 사용하여 WebSocket 타입의 객체를 생성함.
            socket1.binaryType = 'arraybuffer';

            socket1.onopen = function(e) {
                const msg = '[{"ticket":"UNIQUE_TICKET"},{"type":"ticker","codes":["KRW-BTC"]}]';

                socket1.send(msg);
            }

            socket1.onmessage = function(event) {
                
                var enc = new TextDecoder("utf-8"); //// arraybuffer -> string
                var arr = new Uint8Array(event.data);
                var str_d = enc.decode(arr);
                var tp = JSON.parse(str_d);
                var upbit_krw = tp.trade_price;
                
                var str = document.getElementById("upbit_price");
                str.innerHTML = upbit_krw;
                $("#upbit_price").attr("price1", upbit_krw);
            }
        }

        function binance_funcname() {
            var socket2 = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

            socket2.onmessage = function(event){
            var current_price = JSON.parse(event.data);

            var binance_krw = Math.floor(current_price.p*exchange_rate);
            
            document.getElementById("binance_price").innerHTML = binance_krw;
            document.getElementById("usdt").innerHTML = Math.floor(current_price.p);

            $("#binance_price").attr("price2", binance_krw);

            }
        }

        upbit_funcname()
        binance_funcname()
            
            
        window.setInterval(function(){
                
                let upbit_price = $("#upbit_price").attr("price1");
                let binance_price = $("#binance_price").attr("price2");
                
                let kimp = ((upbit_price-binance_price)/binance_price)*100;
                document.getElementById("kimp").innerHTML = kimp.toFixed(2);
               
            },
            100);


});



    







//김프계산: (upbit_krw-krw_pr)/krw_pr*100;