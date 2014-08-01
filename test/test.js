$(function() {

//// 初期化
chai.should();		// 他のアサーションを使う場合 var expect = chai.expect; または var assert = chai.assert;
mocha.setup('bdd');	// TDDの場合 mocha.setup('tdd');


///// テスト本体
describe('メッセージ出力のテスト', function() {

	it ('引数で指定したメッセージが出力されること', function() {
		say('Hello, world!');
		$('#message').text().should.equal('Hello, world!');
	});

	it ('非同期でもメッセージが出力されること', function(done) {
		setTimeout(function() {
			say('こんにちはこんにちは!!');
			$('#message').text().should.equal('こんにちはこんにちは!!');
			done();
		}, 100);
	});

});


//// テストの出力をウィンドウっぽく表示 (不要であればコメントアウト)
$('#mocha')
.css({
	position: 'absolute',
	top: 10,
	right: 20,
	width: 400,
	bottom: 20,
	margin: 0,
	paddingTop: 50,
	overflow: 'scroll',
	backgroundColor: '#ddd',
	boxShadow: '8px 8px 8px rgba(0,0,0,0.3)',
	zIndex: 1000
})
setTimeout(function() {
	$('#mocha-stats')
	.css({
		position: 'absolute',
		top: 5,
		left: 2,
		width: 400,
		height: 40,
		backgroundColor: '#ddd',
		zIndex: 1000
	});
}, 100);


//// テスト実行
mocha.run();

});
