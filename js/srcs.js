let els1 = [];
els1[0] = 'сканд|ванад|рубід|род|ірыд|рэзэрфорд|';
els1[1] = 'стронц|бар|цэр|лютэц|самар| тор|амэрыц|кюр|дармштат|лівэрмор';
els1[2] = els1[1]+'тэхнэц|прамэт|майтнэр|капэрніц';
els1[3] = els1[0]+'паляд|'+els1[2];
let els2 = [];
els2[0] = 'магн|крэмн|цыркон|ніоб|рутэн|кадм|цэз|гафн|рэн|осм|эўроп|гандалін|тэрб|дыспроз|гольм|эрб|ітэрб|актын|пратактын|нэптун|плютон|каліфорн|фэрм|ляўрэнс|дубн|рэнтген|ніхон';
els2[1] = els2[0]+'|айнштайн|мендзялев|сыборг|гас|флеров';
let els3 = ' гал|гел|бэрыл|тул|бэркл|набэл';

let iwords =
`і( 
біс
вал[гз]
гар
грышч
грэк
дал
дыш
жыц
канапіс
кань?н
ка[цўл]
каў[кц]
ксі
леус
лістас
льк
мась?ц
мбрык
мідж
мпар?т
мпульс
нахадз
нды
ндэкс
н[еі][ейяю]
нк(а|і|у)
нтэрым
нфікс
нфімум
ншась?ц
нш(а[йя]?|ую|ы(мі|х|я)?) 
псілан
рад
рбіс
рмас
рха
рыс 
скарк
скарак
скра
скравец
скрачк
с[нт]ась?ц
сь?цік
сь?цін
тар
тры
ць?він
шыяс)`.replace(/\n/g, '|');

const wordlist = {
/* А */
'аахэн':/аахен/,
'абанэмэнт':/абанемент/,
'абанэн$1':/абанен(т|ц)/,
'абісын':/абісін/,
'абрагам':/абрахам/,
'абэліск':/абеліск/,
'авэню':/авеню/,
' агаё ':/ агая /,
'азэрб':/азерб/,
'айнштайн':/эйншэйн(?:ій)?/,
'актор':/акцёр/,
	'акторка':/актрыса/,
'акцыянэр':/акцыянер/,
' алаг':/ алах/,
'альбан':/албан/,
'альбэр':/альбер/,
'альвэоля':/альвеола/,
	'альвэолі':/альвеолы/,
	'альвэолю':/альвеолу/,
	'альвэол':/альвеол/,
'альг$1':/алг(арытм|ебр)/,
'альжыр':/алжыр/,
'алькаг$1':/алкаг(а|о)/,
'альфабэт':/алфавіт/,
'альхім':/алхім/,
'алянд':/аланд/,
'амплюа':/амплуа/,
'ампэр':/ампер/,
'амсьцісла':/мсціла/,
'амэнт ':/амент /,
'амэры$1':/амеры(к|ц)/,
'аналяг':/аналаг/,
'анапэст':/анапест/,
'ангельшчына':/англія/,
	'ангельшчын(ы)(е)':/англіі/,
	'ангельшчыну':/англію/,
	'ангельшчынаў ':/англій /,
	'ангельск':/англійск/,
'антаблемэнт':/антаблемент/,
'антарыё ':/антарыа /,
'апазыцы':/апазіцы/,
'апалягет':/апалагет/,
'апсыд':/апсід/, // Апсыда
'апэляцы':/апеляцы/,
' апэра$1':/ апера(в|т|ц)/,
' апэру$1':/ аперу(е|ю)/,
'арабі$1':/араві(ю|і|й|я)/,
'арамэ$1':/араме([еійя])/,
'аргентын':/аргенцін/,
'арґумэн':/аргумен/,
'армэн':/армен/,
'арнамэн':/арнамен/,
'арсэнал':/арсенал/,
'арта$1і':/арфа(граф|эп)і/,
'арыстотэл':/арыстоцел/,
'арытметы':/арыфметы/,
'асартымэн':/асартымен/,
' асіпавіч':/ асіповіч/,
'аспэкт':/аспект/,
'атлянт':/атлант/,
'атляс':/атлас/,
'атэн':/афін/,
'аўган':/афган/,
'затлян':/акісл/,
/* Б */
'баг$1':/багг(а|і)/,
'базылік':/базілік/,
' бакачч':/ бакач/,
'бэккінґгэм':/бакінгем/,
' балёньня':/ балонья/,
'балён':/балон/,
'(балькон)(гаўбец) ':/балкон /, //? гаўбец
	'балькон':/балкон/,
'баля$1':/бала(д|нс)/,
'банглядэш':/бангладэш/,
'басэйн':/басейн/,
' баторы ':/ баторый /,
	' баторага ':/ баторыя /,
	' баторых ':/ баторыяў /,
'баўгар':/балгар/,
'бэнэдыкт ':/бенедыкт /,
'берасьце ':/брэст /,
	'берасьцем':/брэстам/,
	'берасьця':/брэста/,
	'берасьцю':/брэсту/,
	'берасьці':/брэсце/,
	'берасьцейск':/брэсцк/,
'бэст':/бест/,
'бізант':/візант/,
'бізнэс':/бізнес/,
'бі$1ляг':/бі(ё|я)лаг/,
'(япіска)(біску)п':/[ея]піскап/,
'$1ятлён':/(бі|тры)ятлон/,
// 'блё$1':/бло(г|к)/,
'алякс$1 блок':/алякс(\S*) блёк/,
'блюз':/блуз/,
'бляк$1':/блакір(а|у)/,
'блякаваньне':/блакіроўка/,
	'блякаваньня':/блакіроўкі/,
	'блякаваньні':/блакіроўцы/,
	'блякаваньню':/блакіроўцэ/,
	'блякаваньнем':/блакіроўкай/,
'блякад':/блакад/,
'блонд':/блёнд/,
	'блянд':/бланд/,
'блянк':/бланк/,
'бразыл':/бразіл/,
'браўзэр':/браўз[ае]р/,
'брунэ':/бруне/,
'брыгантына':/брыганціна/,
'будапэш':/будапеш/,
'бухгальт':/бухгалт/,
'бэліз':/беліз/,
'бэльґ':/бельг/,
'бэнгал':/бенгал/,
'бэнін':/бенін/,
'бэрґ':/берг/,
	'берге$1':/бэрґе(лі|ля)/, // вёска
'бэрклі':/берклі/,
'бэрлін':/берлін/,
'бэрмуд':/бермуд/,
'бэрн':/берн/,
	/* вёскі */
	'берн$1 ':/бэрн(і|я) /,
	'бернік':/бэрнік/,
	'бернатоў':/бэрнатоў/,
'бэтлеем':/віфлеем/,
'бярэзань ':/беразіно /,
	'бярэзані ':/беразін[ае] /,
	'бярэзаньню ':/беразіном/,
/* В */
'ва ўкраін':/на ўкраін/,
'бабілён':/вавілон/,
'барбар':/варвар/,
'вайшнор':/вейшнор/,
'валантэр':/валанцёр/,
' валён':/ валон/,
' валэнс':/ валенс/,
'валюа':/валуа/,
'ватэрлёо':/ватэрлоа/,
' вэрон':/ верон/, // Места
'віетнам':/в’етнам/,
'візыт':/візіт/,
'вінцэнт':/вінсент/,
' ворш':/ орш/,
' варша':/ арша/,
'вугоршчына':/венгрыя/,
	'вугоршчыны':/венгрыі/,
	'вугоршчын':/венгрый/,
	'вугор':/венгер/,
	'вугорац':/венгр/,
	'вугорцы':/венгры/,
	'вугорцам':/венграм/,
' вэзэр':/ везер/, // Места
'вэгета':/вегета/,
'вэктар':/вектар/,
'вэксэл':/вэксал/,
'вэля$1':/вела([дзкмрпс])/,
'вэлясы':/веласі/,
'вэнтыл':/вентыл/,
'вэнэр':/венер/,
'вэнэсуэл':/венесуэл/,
'вэрмахт':/вермахт/,
'вэр$1':/вер([сф]і|саль|фя)/,
'вэстэр':/вестэр/,
'вэтэран':/ветэран/,
'вэтэрынар':/ветэрынар/,
'вялей':/вілей/,
'вярэнаў':/в[ао]рана(ва|ў)/, // Гарадзкі пасёлак
	'вярэнаве':/в[ао]ранаве/,
/* Г */
'габрэ':/яўрэ/,
'гадсан':/гудзон|хадсан/,
'газэ$1':/газе(л|т|ц)/,
'гайнрых$1 $2':/генрых(\S*) (гімлер|гайнэ|бёль|гэрц|любке|фон|шліман)/,
'галакос':/халакос/,
'ґаляпаґас':/галапагас/,
' ґалюа ':/ гал[ую]а /,
'галя$1':/гала(кт|г|ц)/,
' гард':/ хард/,
'ґвадэлюп':/гвадэлуп/,
'ґвінэ':/гвіне/,
'ґёбэльс':/гебельс/,
'гейзер':/гейзэр/,
'гендэр':/гендар/,
'генэрал':/генерал/,
'генэра':/генера/,
'гер$1гліф':/іер(а|о)гліф/,
'гератычн':/іератычн/,
'ґібральтар':/гібралтар/,
'гіджра':/хіджра/,
'гіпэр':/гіпер/,
'гіндзі':/хіндзі/,
'гіт - парад':/хіт - парад/,
'гішпан':/іспан/,
'глёбус':/глобус/,
'глёт$1 ':/глот(\S?\S?) /,
'глябал':/глабал/,
'гляды$1':/глады(ёлюс|ятар)/,
'глязур':/глазур/,
'$1твайн':/(глін|пар)твейн/,
' году ':/ года /,
' голмс':/ холмс/,
'гальштайн':/гольштэйн/,
'($1)(ае) (горад)(места) ':/(і|ы) горад /,
	' (горад)(места) ':/ горад /,
	' (гораду)(месту)(места)':/ гораду/,
	' (горад)(мест)а':/ горада/,
	' (горадз)(месьц)е ':/ горадзе /,
	' (гарадо)(места)ў ':/ гарадоў /,
	' (гарадзкі)(меставы)':/ гарадскі/,
	' (гарадзк)(местав)':/ гарадск/,
	' (гарад)(мест)':/ гарад/,
'горадня ':/гродна /,
	'горадні':/гродне/,
	'гарадзен':/гродзен/,
'госьпіс':/хоспіс/,
'грэц':/грэчас/,
'гу$1эрнэр':/гу(б|в)ернёр/,
	'гу$1эрн':/гу(б|в)ерн/,
' гэві ':/ хэві /,
'ґудвўін':/гудвін/,
'гэдлайнэр':/хэдлайнер/,
'гэлаўін':/хэлаўін/,
'гэмінгўэй':/хэмінгуэй/,
'гэмпшыр':/хэмпшыр/,
'гэнры':/генры|хенры/,
'гэрц ':/герц /,
'гэсэн':/гесэн/,
' юґо ':/ гюго /,
'г’юстан':/х’юстан/,
/* Д */
'дакумэн':/дакум[ае]н/,
' зьвесткі ':/ да(?:дзе)?ныя /,
	' зьвестак ':/ да(?:дзе)?ных /,
	' зьвесткам$1 ':/ да(?:дзе)?ным(і?) /,
'джыгад':/джыхад/,
' джэймз':/ джэймс/,
'джэрзі':/джэрсі/,
'джэсык':/джэсік/,
'дзьмітры':/дзмітрый/,
'(ая)(ую) дрыс(а)(у) ':/ы верхнядзвінск /,
	'ай дрысай':/[іы]м верхнядзвінскам/,
	'ай дрысе':/(ага|[іы]м) верхнядзвінску/,
	'дрыс(а)(у) ':/верхнядзвінск /,
	'дрысе ':/верхнядзвінску /,
	'дрысенск':/верхнядзвінск/,
'дусэльдорф':/дзюсельдорф/,
'дывэрсан':/дыверсан/,
'дызэль':/дызель/,
'дыплём':/дыплом/,
'дыплямат':/дыпламат/,
'дырыгент':/дырыжор/,
'дысэр$1':/дысер(т|ц)/,
'дыябэт':/дыябет/,
'дэзэртэр':/дэзерцір/,
'дэкляр':/дэклар/,
'дэфэкт':/дэфект/,
'д’ябал$1':/д’явал( |ь)?/,
'д’ябл':/д’явал/,
/* Е */
'емэн':/емен/,
'эўгені$1':/еўгені(к|ч)/,
'эўнух':/еўнух/,
/* Ё */
'ё$1ф':/іо(зэ|сі)ф/,
'ёган':/іаган/,
/* Ж */
'(ы)(і) жодзін ':/ае жодзіна /,
	'жодзі(н)(на)(не) ':/жодзіна /,
'жэнэв':/жэнев/,
/* З */
'завэрбава':/завербава/,
'зымбаб':/зімбаб/,
'ы зьдзецел ':/ае дзятлава /,
	' зьдзецел ':/ дзятлава /,
	' зьдзецеле':/ дзятлаве/,
	' зьдзецела':/ дзятлава/,
	' зьдзецельск':/ дзятлаўск/,
'зэлянд':/зеланд/,
/* І */
// 'ідэалёг':/ідэалог/,
'ідэаляг':/ідэалаг/,
'імпэр':/імпер/,
'інвэнтар':/інвентар/,
'інвэст':/інвест/,
'інквізі':/інквізы/,
'інструмэн':/інструмен/,
'інспэк':/інспек/,
'інтэрвію':/інтэрв’ю/,
/* Й */
' ё':/ йо/,
' е':/ [ій]е/,
' ю':/ [ій]у/,
' я':/ [ій]а/,
' іенг$1 сары':/ енг(\S*) сары/,
' іуд$1':/ юд([ауы] |ай |зе )/,
/* К */
'каба-вэр':/каба-вер/,
'кабэль':/кабель/,
'кабінэт':/кабінет/,
'казэін':/казеін/,
// 'калегіюм':/калегіум/,
'каленкавіч':/калінкавіч/,
'калён':/калон/,
'калёід':/калоід/,
'калёквіюм':/калоквіум/,
'калёры':/калоры/,
	'каляры':/калары/,
'калюмб':/калумб/,
'каля$1':/кала(бар|ні[зс]|пс)/,
'камэнд':/каменд/,
'камэнт':/камент/,
	'$1ар':/((?:ка|парля)мэнт|сцэн)арый/,
	'$1ары':/((?:ка|парля)мэнт|сцэн)арыі/,
	'$1ара ':/((?:ка|парля)мэнт|сцэн)арыя /,
	'$1ароў':/((?:ка|парля)мэнт|сцэн)арыяў/,
'камэр':/камер/,
'кампазы':/кампазі/,
'кампанэн':/кампанен/,
'кампут':/камп’ют/,
'кампэ$1':/кампе(нса|тэн)/,
'канвэ$1':/канве(н|р)/,
'кансэрв':/кансерв/,
'канспэкт':/канспект/,
'канфэрэн':/канфэрен/,
'канфэс':/канфес/,
'$1тур':/(канфі|мінія)цюр/,
'капэля':/кап[еэ]ла/,
'капэрні$1':/каперні(к|ц)(?:ый)?/,
'карамэль':/карамель/,
' карнўол':/ карнуол/,
'картаген':/карфаген/,
'касэт':/касет/,
// 'каталёг':/каталог/,
'каталя':/катала/,
'катэдр':/кафедр/,
'кгмэр':/кхмер/,
'$1бэры':/(кентэр|сад)беры/,
'кербэля':/кербела/,
	'кербэлі':/кербелы/,
	'кербэльс':/кербелс/,
	'кербэле':/кербеле/,
'кібэр':/кібер/,
'кіля':/кіла/,
	' паўкілі ':/ п[ао]ўкіло /,
'кляві':/клаві/,
'клясы':/клас[ыі]/,
'ая кляса ':/ы клас /,
	'ай клясе ':/[іы]м класе /,
	'ай клясай ':/[іы]м класам /,
	'ай клясы ':/ага класа /,
	'й клясе ':/му класу /,
	'клясай ':/класам /,
	'клясы ':/класа /,
	'клясе ':/класу /,
	'кляс$1':/клас([аену])/,
	' кляса ':/ клас /,
'клю$1б':/клу(м?)б/,
'кобрынь ':/кобрын /,
	'кобрыня ':/кобрына /,
	'кобрынем':/кобрынам/,
	'кобрыні ':/кобрын[еу] /,
'койданаў ':/дзяржынск /,
	'койданава ':/дзяржынска /,
	'койданав(е)(а)':/дзяржынску/,
	'койданаўск':/дзяржынск/,
'(ы)(і) косаў ':/ае косава /,
	' косаў ':/ косава /,
'ксыля':/ксіла/,
'кувэй':/кувей/,
'кўіндыч':/квідыч/,
'кўін':/квін/,
'кэмпінг':/кемпінг/,
'кэльвін':/кельвін/,
'кэльнер':/кельнер/,
'кювэт':/кювет/,
/* Л */
'ладзімер':/ладзімір/,
'лёгі':/логі/,
	'лягіч':/лагіч/,
	'лягізм':/лагізм/,
	'ляг$1 ':/лаг((?:у|ам?|і)?) /,
		'белага ':/беляга /,
		'загінулага':/загінуляга/,
		'гаслага ':/гасляга /,
		' кулаг':/ куляг/,
		'рослага ':/росляга /, // дарослага
		'поляга$1 ':/поляга(м?) /,
		' $1блага ':/ ((?:н[яе])?)бляга /,
	'лёг$1 ':/лог((?:у|ам?|і[ію]?|іяй)?) /,
		' аблог':/ аблёг/,
		'падлог':/падлёг/,
		' $1лога ':/ (бы|з|ма)лёга /,
'лёджыя':/лоджыя/,
'лёзунг':/лозунг/,
' лёжа ':/ ложа /,
'лёід ':/лоід(?:\S?\S?і?) /,
'лёндан':/лондан/,
'лексыка':/лексіка/,
'леўкапля':/лейкапла/,
'леўкацы':/лейкацы/,
'лі$1эр':/лі(б|в)ер/,
'лібан$1':/ліван( |к|с)/,
'лібі$1$2':/ліві(й|я)( |с|ц)/,
'ліцьвін':/літвін/,
'ліхтэнштайн':/ліхтэнштэйн/,
'лэнд':/ленд/,
'люксэм':/люксем/,
' люі':/ луі/,
'люнаты':/лунаці/,
'люнэбур':/люнебур/,
' люўр':/ луўр/,
' $1ляг$2':/ ((?:пра|не)?)лаг(аван|і|уе)/,
'лябара$1':/лабара(н|т)/,
'лябатам':/лабатам/,
'ляванд':/лаванд/,
'ляга$1':/лага(тып|рыф)/,
'лягуна':/лагуна/,
'ляйпцыг':/лейпцыг/,
'ляйтэр':/ляйтар/,
'ляйтматы':/лейтматы/,
' ляка$1':/ лака(дыўск|й?л|маты|н|та|цы)/,
	' лякснэс':/ лакснэс/,
	' лякт$1':/ лакт(а|о|у)/,
'лякуна':/лакуна/,
'лямп':/ламп/,
'лянд':/ланд/,
'лянтан':/лантан/,
'ляплянд':/лапланд/,
'лярэ$1':/ларэ(н|та)/,
'лясьён':/ласьён/,
'лятар$1':/латар(ы|э)/,
'ляўр':/лаўр/,
'ляфэт':/лафет/,
' ляял$1':/ лаял(ь|і)/,
/* М */
'магабгарата':/махабхарата/,
'мадмуазэл':/мадмуазел/,
'максымал':/максімал/,
'макулятур':/макулатур/,
'маладэчн':/маладзечн/,
'мангайм':/мангейм/,
'мангэтан':/манхэтан/,
'мансэр':/мантсер/,
'манумэнт':/манумент/,
'(карт)(мап)аў ':/карт /,
	'(карц)(мап)е ':/карце /,
	'(карт)(мап)$1':/карт([аоуы])/,
'маратон':/марафон/,
'мартын':/марцін/,
'марэл':/морэл/,
// 'марэлев':/абрыкосав/,
// 	'(ая)(ую) марэ(ля)(лю) ':/[іы] абрыкос /,
// 	'ае марэлі ':/ага абрыкоса /,
// 	'ай марэлі ':/[іы]м абрыкос |аму абрыкосу /,
// 	'ай марэляй ':/[іы]м абрыкосам /,
// 	'марэлі ':/абрыкос[аеуы] /,
// 	'марэляй ':/абрыкосам /,
// 	'марэ(ля)(лю) ':/абрыкос /,
// 	'марэляў':/абрыкосаў/,
'масажнік':/масажор/,
'муджагед':/маджахед/,
'мухамад':/магамед/,
'мэдал':/медал/,
'мэдычн':/медыцынск/,
'мэды':/мед(ы|зі)/,
'мэксык':/мексік/,
'мэліяра':/меліяра/,
' мэк':/ мекк/,
'мэмарыял':/мемарыял/,
'мэнэстрэл':/менестрэл/,
'мэню':/меню/,
'мэркел':/меркел/,
'мэркур':/меркур(?:ый)?/,
' мэта':/ мета/,
	// 'прадмета':/прадмэта/,
'мэтр$1':/метр([аоуы ])/,
'мэтэа$1':/метэа(р|с)/,
'мэтэор':/метэор/,
'мэхан':/механ/,
'мэцэна$1':/мецэна(т|ц)/,
'мікранэз':/мікранез/,
'мільянэр':/мільянер/,
'мінэрал':/мінерал/,
'менск':/мінск/,
'міт':/міф/,
' $1э$2':/(арф|гайв|каліз|муз|спідв)е([ійюя])/,
	' $1эем':/ (арф|гайв|каліз|муз|спідв)еем/,
	' $1эі':/ (арф|гайв|каліз|муз|спідв)ее/,
	' $1э':/ (арф|гайв|каліз|муз|спідв)е/,
'мушкетэр':/мушкецёр/,
'мэнэджмэн':/мэнэджмен/,
	'мэнэдж':/менедж/,
'мюнхэн':/мюнхен/,
/* Н */
'наваград':/навагруд/,
'навэля':/нав[еэ]ла/,
' наз(вай)(овам) ':/ назвай /,
	' на(зв)(зов)амі ':/ назвамі /,
	' наз(в$1)(оў) ':/ назв(а|у) /,
	' на(зве)(зову) ':/ назве /,
	' наз(вы)(ова)(зовы) ':/ назвы /,
'нактурн':/накцюрн/,
'нарвэ':/нарве/,
'натарыюс':/натарыўс/,
'натурморт':/нацюрморт/,
'нівэрсал':/ніверсал/,
'нівэрсытэ':/ніверсітэ/,
'нобэл':/нобел/,
'нэшвіл':/нашвіл/,
'нэґаты':/негаты/,
'нэўтрал':/нейтрал/,
'нэў$1рон':/ней(т?)рон/,
'нэкра':/некра/,
	'некранут':/нэкранут/,
'нэпал':/непал/,
	' непаладк':/ нэпаладк/,
'нэптун':/нептун/,
'нэрв':/нерв/,
'нямеччына':/германія/, // могуць быць праблемы з хім элемэнтамі
	'нямеччын(е)(ы)':/германіі/,
	'нямеччыну':/германію/,
/* О */
' опэр$1':/ опер(а|у|ы)/,
' осла':/ осьлё/,
/* П */
'павал':/павел/,
	'павелічэн':/павалічэн/,
'падпісанты':/падпісчыкі/,
	'падпісант':/падпісчык/,
'пазы$1':/пазі(цы|т)/,
'палестын':/палесцін/,
'палінэз':/палінез/,
'палёні':/палоні/,
	'паляні':/палані/,
'палянэз':/паланэз/,
'пампэ$1':/пампе(і|й|я)/,
'парлямэн':/парламен/,
'партфэл':/партфел/,
'патас':/пафас/,
'пудэл':/пудзел/,
'пўэрта':/пуэрта/,
'пэд ':/пед /,
'пэдынґтан':/падынгтан/,
'пэда$1':/педа(г|л|ф)/,
// 'пэды$1 ':/педы([ійюя]|чн\S*) /,
'пэды':/педы/,
'пэнальці':/пенальці/,
' пэні':/ пені/,
	' пенікі':/ пэнікі/, // вёска
'пэнсі':/пенсі/,
'пэйзаж':/пейзаж/,
'пэрпэндыкуляр':/перпендыкуляр/,
'пэрс$1н':/перс(а|о)н/,
'пэрспэкты':/перспекты/,
'пэрсі$1':/персі(і|й|я)/,
	'пэрсыд':/персід/,
' пэру':/ перу/,
'пэрыяд':/перыяд/,
'пэсымі$1':/песімі(з|с)/,
'плямбір':/пламбір/,
'плянэт':/планет/,
'$1пляст':/(\S)пласт/,
'плястар':/пластыр/,
'плясты':/пласты/,
'плято':/плато/,
'плятформ':/платформ/,
' пляц$1':/ плац([аоуык])/,
'пля$1':/пла(н|кат|фон|тформ|сты(к|ч))/,
'пляшк':/плашк/,
'плютон':/плутон/,
'$1($2)(ая) (пол)(плоць) ':/(\S{3})([ыі]) пол /,
	'$1($2)(ай) (полам)(плоцьцю) ':/(\S{3})([ыі]м) полам /,
	'$1($2)(ай) ($3)(плоці) ':/(\S{3})(а(?:га|му)) (пол[ау]) /,
	' (пол)(плоць) ':/ пол /,
	' (полам)(плоцьцю) ':/ полам /,
	' ($1)(плоці) ':/ (пол[ау]) /,
	' (палав)(плоцев)$1':/ палав([ауы])/,
'$1цак ':/(пола|слу)цк /,
'прапойску ':/слаўгарадзе /,
	'прапойск':/слаўгарад/,
'прафэс$1':/прафес(а|і|у)/,
'прафілякт':/прафілакт/,
'прызэр':/прызёр/,
'прынсыпі':/прынсіпі/,
'прэзыдыюм':/прэзідыўм/,
'прэзыд':/прэзід/,
'псэўда':/псеўда/,
'псых$1':/псіх(а|і|о)/,
'пітаґор':/піфагор/,
'піянэр':/піянер/,
/* Р */
'райх':/рэйх/,
'расе$1 ':/расі([ійюя]) /,
'расейс':/расійс/,
'ружов':/розав/,
	'бярозав':/бяружов/,
'рыю - дэ - жанэйру':/рыа - дэ - жанэйра/,
' рыё -':/ ры[ао] -/,
'рэзэрв':/рэзерв/,
'рэзэрфорд':/рэзерфорд(?:ый)?/,
'рэзыдэн':/рэзідэн/,
'рэкамэнд':/рэкаменд/,
'рэклям':/рэклам/,
'рэмэйк':/рэмейк/,
'рэпартэр':/рэпарцёр/,
'рэфэр':/рэфер/,
/* С */
' тэсалёнік':/ (?:фе)?сал[ао]нік/,
'салён':/салон/,
'снайпэр':/снайпер/,
'сўазілэ':/свазілэ/,
'сўі$1':/сві(нг|фт)/,
'сьвят$1 гэлен$2':/свят(\S+) ален(\S\S?)/,
'сьвят':/свяшчэнн/,
'сэанс':/сеанс/,
' сэбарэ':/ себарэ/,
' сэвильл$1':/ севиль([еіюя])/,
	' сэвиль':/ севиль/,
'сэзон':/сезон/,
'сэйшэл':/сейшэл/,
'сэкстына':/сексціна/,
'сэк$1':/сек(с|т)/,
'сэмінар':/семінар/,
'сэмэстр':/семестр/,
'сэм’юэл':/сэмюал/,
'сэна$1':/сена(т|ц)/,
'сэнэгал':/сенегал/,
'сэнс':/сенс/,
'сэнтымэн':/сентымен/,
'сьвятога  $1 ':/сент - (\S+а) /,
	'сьвятой  $1 ':/сент - (\S+[іы]) /,
	'сьвяты ':/сент -/,
'сэрб':/серб/,
'сэрв$1':/серв(а|е)/,
'сэрвіс':/сервіс/,
' сэрфі':/ сёрфі/,
'сэсі$1':/сесі(і|я)/,
'сіетл':/сіэтл/,
' сіян':/ сіан/,
'сыбір':/сібір/,
'сыб$1рг':/сіб(а|о)рг(?:ій)?/,
'сыгнал':/сігнал/,
'сылезі':/сілезі/,
'сылік$1':/сілік(а|о)/,
'сымбаль ':/сімвал /,
	'сымбалі':/сімвалы/,
	'сымб$1лі':/сімв(а|о)лі/,
	'сымбалем':/сімвалам/,
	'сымбаля':/сімвала/,
'сымэтры':/сіметры/,
'сымпат':/сімпат/,
'сымпозіюм':/сімпозіум/,
'сымпт$1м':/сімпт(а|о)м/,
'сымулятар':/трэнажор/,
'сымуля$1':/сімуля(в|н|ц)/,
'сымф$1ні':/сімф(а|о)ні/,
'сынагог':/сінагог/,
'сынгапур':/сінгапур/,
'сындром':/сіндром/,
'сындыка':/сіндыка/,
'сынкрэт':/сінкрэт/,
'сынод':/сінод/,
'сынонім':/сінонім/,
'сынтакс':/сінтакс/,
'сынтэ$1':/сінтэ(з|т)/,
'сынус':/сінус/,
'сынхр$1':/сінхр(а|о)/,
'сыры$1':/сіры(і|й|я)/,
'сыстэм':/сістэм/,
'сытуацы':/сітуацы/,
'сыфіліс':/сіфіліс/,
'сыцылі':/сіцылі/,
'сквэр':/сквер/,
'скінгэд':/скінхэд/,
'славаччына':/славакія/,
	'славаччын(ы)(е)':/славакіі/,
	'славаччыны':/славакій/,
	'славаччынамі':/славакіямі/,
'спадзеў ':/спадзяванне /,
	'спадзевам ':/спадзяваннем /,
	'спадзеве ':/спадзяванні /,
	'спадзеву ':/спадзяванню /,
	'спадзева':/спадзявання/,
'спэ$1':/спе(ц|кт)/,
'стоўпц':/стоўбц/,
'стуардэс':/сцюардэс/,
'стыпэнд':/стыпенд/,
'стэля$1':/стэла(ж?)/,
'стэлу ':/стэлю /,
'стэлы ':/стэлі /,
'супэр':/супер/,
'сфэр':/сфер/,
'схаляс':/схалас/,
// 'мэн$1 ':/мен(|а[му]?|ы|ск\S+) /,
'сюзэрэн':/сюзерэн/,
/* Т */
'тўі$1':/тві(ст|н)/,
'тлянд':/тланд/,
'транзыт':/транзіт/,
'трансыльв':/трансільв/,
'трапэ$1':/трапе(з|ц)/,
' трыё ':/ трыа /,
// 'трыюмф':/трыўмф/,
'ту$1':/цю(баж|бінг|льпан|рбан)/,
'туркмэн':/туркмен/,
'турынгіт':/цюрынгіт/,
'турынґ':/цюрынг/,
'турэччына':/турцыя/,
	'турэччын(ы)(е)':/турцыі/,
	'турэччын':/турцый/,
' тытма':/ цітмар/,
' тытус$2 ':/ ціт(ус)?(?:а(м|вы|мі)?|у|ы)? /,
'тэазоф':/тэасоф/,
	'тэозаф':/тэосаф/,
'тэмпэра':/тэмпера/,
'тэнэсі':/тэнесі/,
'тэрнэр':/цёрнер/,
' тэсэ':/ тэсе/, // Тэсэй
'т’юдар':/цюдар/,
/* У */
'узбэк':/узбек/,
'унівэрсыт':/унівэрсіт/,
/* Ў */
'ўіскас':/віскас/,
'ўэйлз':/уэльс/,
' ў$1':/ у([аеіоуыэ])/,
/* Ф */
'фаўн':/фавн/,
'фальклёр':/фальклор/,
'фанэты$1':/фанеты(к|ч)/,
'фунікулер':/фунікулёр/,
'фэадал':/феадал/,
'фэдэра$1':/федэра(л|ц)/,
'фэльчар':/фельчар/,
'фэльд':/фельд/,
'фэрмэр':/фермер/,
	'фэ$1':/фе(од|рм|ст)/,
'фэручч':/феручч?/,
'фэрбэнкс':/фэрбанкс/,
'фэрэнцы':/ферэнцы/,
'фэрэра':/ферэра/,
'фізы':/фізі/,
'філёзаф':/філосаф/,
	'філязоф':/філасоф/,
'фіналь ':/фінал /,
	'фіналем':/фіналам/,
	'фіналя':/фінала/,
	'фіналі':/фінале/,
	'фіналю':/фіналу/,
'флятылі':/флатылі/,
'флё$1':/фло(т|ц)/,
'фрагмэнт':/фрагмент/,
'фразэа':/фразеа/,
'фрытур':/фрыцюр/,
'фундамэнт':/фундамент/,
'фюзэляж':/фюзеляж/,
/* Х */
'халіфат$2 абасыдаў':/абасід[зс]к(\S+) халіфат(\S*)/,
	' абасыд':/ абасід/,
'хаўрусьні$1':/саюзні(к|ц)/,
' хвойнік':/ хойнік/,
'хгаўзэн':/хаўзэн/,
'хэльсынк':/хельсінк/,
'хэрсон':/херсон/,
/* Ц */
'цыкляальк$1н':/цыклаалк(а|е|і)н/,
'цыліндар ':/цыліндр /,
'(ую)(ы) (карыцу)(цынамон)':/ую карыцу/,
	'(ая)(ы) (карыца)(цынамон)':/ая карыца/,
	'(ай)(ім)(ым) (карыцай)(цынамонам)':/ай карыцай/,
	'(ай)(аму)(ага) (карыцы)(цынамону)':/ай карыцы/,
	'($1)(цынамон)':/(карыц[ау])/,
	'(карыцай)(цынамонам)':/карыцай/,
	'(карыцы)(цынамону)':/карыцы/,
	'(карыц)(цынамонаў)':/карыц/,
'ая $1ля ':/ая (цэ|альвэо|вакуо|жырандо)ль /,
	'ую $1лю ':/ую (цэ|альвэо|вакуо|жырандо)ль /,
	' $1(ля)(лю) ':/ (цэ|альвэо|вакуо|жырандо)ль /,
	' $1ляй ':/ (цэ|альвэо|вакуо|жырандо)ллю /,
'(ая)(ую) за(ля)(лю) ':/ы зал /,
	'ай заляй ':/[іы]м залам /,
	'за(ля)(лю) ':/зал /,
	'заляй ':/залам /,
'цэляфан':/цэлафан/,
'цэмэнт':/цэмент/,
/* Ш */
' шагід':/ шахід/,
' шаг$1 ':/ шах(\S?\S?|амі) /,
'$1я шацілавічы ':/(i|ы) светлагорск /,
	'$1мі шацілавічамі ':/(i|ы)м светлагорскам /,
	'ых шацілавічаў ':/ага светлагорска /,
	'ым шацілавічам ':/аму светлагорску /,
	'шацілавічы ':/светлагорск /,
	'шацілавічаў ':/светлагорска /,
	'шацілавічам ':/светлагорску /,
	'шацілавічамі ':/светлагорскам /,
'швэ$1':/шве(д|ц)/,
'швайцар':/швейцар/,
'шлягбаўм':/шлагба[уў]м/,
'шлянг':/шланг/,
/* Э */
'эбінґгаўз':/эбінгаўз/,
'эвангел':/евангел/,
'эгіп':/егіп/,
'эдўард':/эдуард/,
'эдўін':/эдвін/,
'экзэку':/экзеку/,
'экспэ$1':/экспе(ды|рт)/,
'экспэрымэнт':/эксперымент/,
'эксплюата':/эксплуата/,
' эпапэ':/ эпапе/,
'эпарх':/епарх/,
'эстафэт':/эстафет/,
' эўр$1':/ еўр(а|о|ыпід)/,
'эўфары':/эйфары/,
'экумэн':/экумен/,
'элемэнт':/элемент/,
'элізэйск':/елісейск/,
'энцыкля':/энцыкла/,
'эфэкт':/эфект/,
'эфэмэр':/эфемер/,
'этуд':/эцюд/,
'этыёп':/эфіоп/,
'этэр':/эфір/,
/* Ю */
'юда':/іўда/,
	'юдэ':/іўдзе/,
/* Я */
'янаў ':/іванава /,
	'янав$1':/іванав(а|е)/,
	'янаўск':/іванаўск/,
'яцьвяг':/ятвяг/,
/* Хімія */
'альк$1н':/алк(а|е|і)н/,
	' балкан':/ балькан/,
'$1лёз$2':/(амі|цэлю|стахі|трэга)лоз(а|е|у)/,
	'аміла':/аміля/,
'ксылёза':/ксілоза/,
'ксылюлёза':/ксілулоза/,
'хітын':/хіцін/,
'пектын':/пекцін/,
'анамэр':/анамер/,
'пэнт$1':/пент(а|о)/,
'гэкс':/гекс/,
'гэпт':/гепт/,
'$1ан$2ль':/(м?эт|прап|бут|пэнт|гэкс|гэпт)ан(а|о)л /,
	'$1ан$2лю':/(м?эт|прап|бут|пэнт|гэкс|гэпт)ан(а|о)л[ау] /,
	'$1ан$2лі':/(м?эт|прап|бут|пэнт|гэкс|гэпт)ан(а|о)л[еы] /,
	'$1ан$2ле':/(м?эт|прап|бут|пэнт|гэкс|гэпт)ан(а|о)ла/,
'$1тыль ':/(э|ме)тыл /,
	'$1тылю ':/(э|ме)тыл[ау] /,
	'$1тылі ':/(э|ме)тыл[еы] /,
	'$1тыле':/(э|ме)тыла/,
'прапіль':/прапіл/,
'манамэр':/монамер/,
'іён':/іон/,
	'іян':/іан/,
'кісьля':/кіслат[ао]/,
	'кісьлі':/кіслаты/,
	'кісьлю':/кіслату/,
	'кісьле':/кіслаце/,
	'кісьляў ':/кіслот(?:аў)? /,
	'кісл':/кіслотн/,
'ы луг ':/ая шчолач /,
	'ага лугу ':/ай шчолачы /,
	'ыя лугі ':/ыя шчолачы /,
	'(ы)(і)м лугам ':/ай шчолаччу /,
	'луг ':/шчолач /,
	'луг(і)(у)':/шчолачы/,
	'лугам':/шчолаччу/,
	'луж':/шчолач/,
'радыяакт':/радыеакт/,
'радыюс':/радыўс/,
'вада(род)(твор)':/вадарод/,
'вугля(род)(твор)':/вуглярод/,
'літ':/ліцій/,
	'літа':/ліці[ея]/,
	'літу':/ліцію/,
	'ліце':/ліці[іе]/,
'флёр':/фтор/,
	// 'флюар':/фтар/,
'гліняк':/алюміній/,
	'гліняка':/алюміні?я/,
	'гліняку':/алюміні[ію]/,
	'гліняко':/алюміні?е/,
'поташ':/калій/,
	'поташа':/калі[ея]/,
	'поташу':/калію/,
	'поташы':/каліі/,
'вапень':/кальцый/,
	'вапне':/кальцы[ея]/,
	'вапню':/кальцыю/,
	'вапні':/каліі/,
'манган$1':/маргане?ц( |а|у)/,
	'мангане':/марганцы/,
'(медзь)(сьпіж)':/медзь/,
	'(медзі)(сьпіжу)':/медзі/,
	'(медзьдзю)(сьпіжам)':/меддзю/,
	'(мед)(сьпіжар)н':/медн/,
'аршэнік':/мышʼяк/,
	'аршэнікам':/мышʼяком/,
' сэлен':/ селен/,
'ітар':/ітрый/,
	'ітара':/ітры[ея]/,
	'ітару':/ітрыю/,
	'ітары':/ітрыі/,
'бэрыл':/берыл(?:ій)?/,
'тэхнэц':/тэхнец(?:ый)?/,
'паляд':/палад(?:ый)?/,
	'непалад':/непаляд/,
'срэбра':/серабро|сярэбра/,
'ая цына':/ае волава/,
	'ай цыне':/(ым|аму) волав[уе]/,
	'ай цынай':/[іы]м волавам/,
	'цына':/волава/,
	'цыне':/волав[уе]/,
	'цынай':/волавам/,
	'цынав':/валавян/,
'ы антымон':/(ая|ую) сурм[ау]/,
	'га антымона':/й сурмы/,
	'(ы)(і)м антымонам':/ай сурмой/,
	'антымон':/сурм[ау] /,
	'антымона':/сурмы /,
	'антымонам':/сурмо[йю] /,
	'антымонав':/сурмян /,
'тэлюр':/тэлур/,
'ксэнон':/ксенон/,
'празэадым':/празеадым/,
'нэадым':/неадым/,
' прамэт':/ прамет(?:ый)?/,
'танталем':/танталам/,
	'танталя':/тантала/,
	'танталю':/танталу/,
	'тантал':/танталь/,
'пл(аці)(яты)н':/плацін/,
'ае волава':/ы свін(ец|ца)/,
	'волава':/свін(ец|ца)/,
	'волаву':/свінцу/,
	'волавам':/свінцом/,
	'валавян':/свінцов/,
'бісмут':/вісмут/,
'палён':/палёній/,
'мендзялеў':/мендзялевій/,
'набэл':/набел/,
'борыюм':/борый/,
	'борыюма':/борыя/,
	'борыюму':/борыю/,
	'борыюма$1':/борые(в|м)/,
	'борыюме':/борые/,
'гас ':/хас(?:ій)? /,
'майтнэр':/м[ае]йтнер(?:ый)?/,
'флероў':/флеровій/,
'маскоў':/масковій/,
	'масковам':/масковіем/,
	'маскове':/масковіе/,
	'маскову':/масковію/,
	'масковам':/масковіем/,
'тэнэс$1':/тэнэсін(\S?\S?і?)/,
'аганэсон':/аганесон/,
'тлене':/кіслародзе/,
	'тлену ':/кісларода /,
	'тлен':/кісларод/,
'нэон':/неон/,
'сод':/натрый/,
	'соду':/натры[яю]/,
	'сода':/натрые/,
	'содзе':/натрыі/,
' серк$1 ':/ сер(ай?|у) /,
	' сер(кі)(цы) ':/ серы /,
'хлёр':/хлор/,
	'хляр':/хлар/,
'$<el>':`(?<el>${els1[0] + els1[1]}|інд|франц|рад)ый `,
	'$<el>а':`(?<el>${els1[3]})ы[ея]`,
	'$<el>у':`(?<el>${els1[3]})ыю`,
	'$<el>зе':`(?<el>${els1[3]}|рад)ыі`,
	'$<el>ы':`(?<el>${els1[2]})ыі`,
'$1':`(${els2[0]}|герман)ій`,
'$1а':`(${els2[1]})і[ея]`,
'$1у':`(${els2[1]})ію`,
'$1ь':`(${els3}| тал)ій`,
' тале':` таліе`,
'$1$2':`(${els3})і(е|ю|я)`,
'$1е':`(${els3})іі`,
/* ер > эр */
'$1эр':/(антрэпрэн|грав|грым|гіпнатыз|паз|плян|прыз|рэжыс|рэзан|сап|сутэн|трас|фантаз)ёр/,
'$1тэр':/(біле|брэ|ман|(ім|транс|экс)пар|салі)цёр/,
'$1жэр':/(вальты|коміваяж|фура)жор/,
'$1дэр':/(каска|мара|фура)дзёр/,
'$<ar>эр':/(?<ar>мэлянж|пражэкт)ар/,
'$<eor>эр':/(?<eor>парфум|фраз)[её]р/,
'$<er>эр':/(?<er>кандыцыян| тап)ер/,
'$1тар':/(вах|ліф|шах)цёр/,
/* Імёны з лаціны */
' понтыюс':/ понцій/,
	' понты':/ понці/,
// 'луц(ыюс)(ыяў) ':/луцый /,
// '$1(ліюс)(ліяў) ':/(ю|карне)лій /,
// 	'$1юса':/(понты|карнелі|луцы)я/,
// 	'$1юсу ':/(понты|карнелі|луцы)ю /,
// 	'$1юс(ы)(е)':/(понты|карнелі|луцы)і/,
// 	'$1юсам':/(понты|юлі|карнелі|луцы)ем/,
// 	'карнэлі':/карнелі/,
// 	' люцы':/ луцы/,
/* іра, іро */
'$<ir>$2':/(?<ir>абстраг|акліматыз|(?:а|нацыя)наліз|баз|баланс|ваеніз|груп|імпан|імправіз|інфарм|іраніз|каляніз|каляпс|каталіз|культыв|курс|нэрв|плян|прагназ|прыватыз|рэаг|санкцыян|тыпіз|урбаніз|фантаз|фар[мс]|фінанс|фраз|функцыян)ір(а|у)/,
'$<ir>т$2':/(?<ir>анке|арыен|дыску|дэб[аю]|(?:ім|экс)пар|інспэк|кантак|кансуль|паразі|тэс|цы)цір(а|у)/,
'$<ir>д$2':/(?<ir>дэгра|лікві)дзір(а|у)/,
'$<yr>$2':/(?<yr>ангаж|дэкляр|ігнар|тыраж|фініш)ыр(а|у)/,
'$<yr>к$2':/(?<ir>кваліфі|права|фальсіфі)цыр(а|у)/,

'$<ir>ія':/(?<ir>кап|прэм)іра/,
'$<ir>ію':/(?<ir>кап|прэм)іру/,

'$<ir>ля':/(?<ir>дуб|кантра|капіту|прафі|пэда)ліра/,
'$<ir>лю':/(?<ir>дуб|кантра|капіту|прафі|пэда)ліру/,

'$<ir>я':/(?<ir>ініцы|канстру|тату)іра/,
'$<ir>ю':/(?<ir>ініцы|канстру|тату)іру/,
/* ей > яў */
'$1(яў)(ей) ':/(каніфол|кішэн|прымес|пэдал|ростан|сенажац|скрон|сувяз|тунэл|туфл|цюл|шампун)ей /,
'(цяней)(ценяў) ':/цяней /,
'сьц(яў)(ей) ':/сцей /,
' $1асьцей ':/ (г|к|(?:най)?ч)асьц\(ей\)\(яў\) /,
/* а > у */
'$<au>у ':/(?<au>абед| дон|енск|[іы]зм|завод|інстытут|канал|крым|(?:кле|пола|слу)цк|лёндан|мадрыд| рым)а /,
'$<au>(а)(у) ':/(?<au>бэрлін|нясвіж|парыж)а /,
// '$<au>ю ':/(?<au>дуна)я /,
'дунаю ':/дуная /,
/* Летувіскія назвы */
'рэспублі$1 летув$2':/рэспублі(к[аіу]|ц[ыэ]) літв([аеыу])/,
'летувіск$1 мов':/літоўск(\S+) мов/,
'аўкштота':/аўкштай(?:ці|ты)я/,
	'аўкшто(ты)(це)':/аўкштай(?:ці|ты)і/,
	'аўкштоту':/аўкштай(?:ці|ты)ю/,
'абэле ':/абялей /,
'ажарэле ':/эжарэліс /,
'новыя  акмяны ':/наўёйі - акмяне /,
	'акмяны ':/акмяне /,
'аліта ':/аліўтс /,
'анікшты ':/анікшчэй /,
'араны ':/варэны /,
	' аран':/ варэн/,
'белая вака ':/балтайі воке /,
'біржы ':/біржай /,
'бірштаны ':/бірштанас /,
'вабольнікі ':/вабальнінкас /,
'варні ':/варней /,
'ваўкавішкі ':/вілкавішкіс /,
'векшнэ ':/віекшней /,
'вількамір ':/укмярге /,
'вількі ':/вількія /,
'вільня ':/вільнюс /,
	'вільні':/вільнюс[aе]/,
	'вільнe':/вільнюсу/,
	'вільняй':/вільнюсам/,
'вісагіня ':/вісагінас /,
'вэнта ':/вянта /,
'вяйсеі ':/вяйсіеяй /,
'вярзбалаў ':/вірбаліс /,
'гелгудышкі ':/гялгаўдзішкіс /,
'горжды ':/гаргждай /,
'грэгарава ':/грыгішкес /,
'даўгі ':/даўгай /,
'дру(ске)(зге)нікі ':/друскінінкай /,
'ду$1ты ':/ду(кш|ся)тас /,
'езна ':/езнас /,
'езяросы ':/зарасай /,
'еўе ':/віевіс /,
'жагоры ':/жагарэ /,
'жыжмары ':/жыежмарэй /,
'каварск ':/каварскас /,
'казлова руда ':/казлу руда /,
'кашадары ':/кайшадорыс /,
'кейданы ':/кедайней /,
'кельмы ':/кяльме /,
'кібарты ':/кібартай /,
' коўна ':/ каўнас /,
	' коўн':/ каўнас/,
'крэтынга ':/крацінга /,
'купішкі ':/купішкіс /,
'куршаны ':/куршэнай /,
'лазьдзея ':/лаздзіяй /,
'ландвараў ':/лянтварыс /,
'лінкаў ':/лінкува /,
'мажэйкі ':/мажэйкей /,
'маляты ':/малетай /,
'мар’ямпаль ':/марыямпале /,
'немянчын ':/нямянчыне /,
'нерынга ':/нярынга /,
'новыя&#160;сьвянцяны ':/швянчонелей /,
'пагегі ':/пагегей /,
'падбродзе ':/пабрадзе /,
'пакрой ':/пакруойіс /,
'панявеж ':/панявежыс /,
'панядзелі ':/пандэліс /,
'панямунь ':/панямуне /,
'плунгяны ':/плунге /,
'посваль ':/пасваліс /,
'прэкуле ':/прыекуле /,
'прэны ':/прыенай /,
'радзівілішкі ':/радзвілішкіс /,
'ракішкі ':/рокішкіс /,
'расены ':/расяйней /,
'рудзішкі ':/рудзішкес /,
'рэмігола ':/рамігала /,
'рэтаў ':/рыетавас /,
'саланты ':/салантай /,
'салечнікі ':/шальчынінкай /,
'сімна ':/сімнас /,
'скаўдвілі ':/скаўдзвіле /,
'смольнікі ':/смалінінкай /,
'субоч ':/субачус /,
'сьвянцяны ':/швянчоніс /,
'сяды ':/сяда /,
'таўрогі ':/таўраге /,
'трашкуны ':/трашкунай /,
'трокі ':/тракай /,
'ужвэнты ':/ужвянціс /,
'уладыславаў  ':/кудзіркас наўміесціс /,
'цельшы ':/цяльшэй /,
'цытавяны ':/цітувенай /,
'шадаў ':/шэдува /,
'шакі ':/шакей /,
'шаўлі ':/шаўляй /,
'шкуды ':/скуодас /,
'шылакарчма ':/шылуце /,
'шылэле ':/шылале /,
	' шылэл':/ шылал/,
'шырвінты ':/шырвінтас /,
'эйрагола ':/арогала /,
	' эйрагол':/ арогал/,
'эйшышкі ':/эйшышкес /,
'электрэны ':/эляктрэнай /,
'юрбург ':/юрбаркас /,
'янава ':/ёнава /,
'янішкеле ':/ёнішкеліс /,
'янішкі ':/ёнішкіс /,
/* Іншыя */
// '$1м вячоркам':/(а|о)м вячоркай/,
// 'ам купалам':/ай купалай/,
// 	' купалам':/ купалай/,
'$<a>юс':/(?<a>андрэс\S* цэльсі)й/,
	'$<a>юсам':/(?<a>андрэс\S* цэльсі)ем/,
	'$<a>юса':/(?<a>андрэс\S* цэльсі)[яе]/,
	'$<a>юсе':/(?<a>андрэс\S* цэльсі)і/,
	'$<a>юсу':/(?<a>андрэс\S* цэльсі)ю/,
'пэрл - гарбар':/пёрл - харбар/,
'рыма - кат':/рымска - кат/,
' юнэско ':/ юнэска /,
' нато ':/ ната /,
' ндр ':/ гдр /,
' сау ':/ саў /,
' уэфа ':/ ўэфа /,
' фрн ':/ фрг /,
/* Іншыя 2 */
' ня $1':` не ([бвгджзйлмнпстфцчшў\\(\\)]*[оё]
(вы)?(брал[аі]
буд(зе|у(ць|чы)?)
ваш
веда(л[аі]|ць|ю(ць|чы)?)
ма(е|ючы|ю(ць|чы)?)
ме(л|ў|ць)
мы(ц|л[аі])
пі(?:са|шу)(?:ц|чы)? 
ска(ж(а|уць)|за )
спал[аі]
чу[елўцю])${''}
веды
выраш
вы[дп]ал[еіяю]
выпад
гор(ш|ай)
гу(к|чн|ст)
дрэнн
іхн
лёгк
(?:мен|бол|леп)(?:ш|ей)
наш([аы]я|ую|ых)
руш[аы]
ста(ў|не|нуць|л[аі])
таго
тое
тыя
ўвод
ўс[еёя]
ян 
${iwords})`
.replace(/\n/g, '|'),
' бяз $1':` без ([бвгджзйлмнпстфцчшў\\(\\)]*[оё]
(вы)?(мела 
мытых
піса[нц]
ска(жа|жуць|за) 
спал[аі]
чу[елўцю])${''}
ваш
ведаў
выраш
вы[дп]але
выпад
гор(ш|ай)
гу(к|чн|ст)
дрэнн
іхн
лёгк
(мен|бол|леп)(ш|ей)
наш(ую|ых)
пішучы
руша
стаў
таго
ўвод
ўс[еёя]
ян
${iwords})`
.replace(/\n/g, '|'),
'$1 ':/(ступ)ленне /,
	'$1ам ':/(ступ)леннем /,
	'$1е ':/(ступ)ленні /,
	'$1у ':/(ступ)ленню /,
	'$1а':/(ступ)лення/,
' з ':/ са /,
'с$1':/зс(\S\S)/,
'цк':/[ктцч]ск/,
'дз$1':/дс(к|тв)/,
' адск':/ адзк/,
	' гадсан':/ гадзан/,
'ск':/[гжхш]ск/,
'$1ўс':/([аеёіоуыэюя])вс/,
'$1ар ':/((?:\S\S)д|т)р /,
'маль ':/мль /,
'сься ':/шся /,
'нік ':/шчык /,
'зьнік ':/зчык /,
'$1юм':/([ыі])[уў]м/,
'$1юс':/([ыі])ус/,
/* скарачэньні > поўныя */
'дзяржаўны&#160;плян ':/дзяржплян /,
'зямельны&#160;фонд ':/зямфонд /,
'інстытут&#160;беларускай&#160;культуры':/інбелкульт/,
'лясная&#160;гаспадарка ':/лясгас /,
'раённы&#160;аддзел&#160;адукацыі ':/райаа /,
'раённы&#160;фінансавы&#160;аддзел ':/райфа /,
'раённы&#160;камітэт ':/райкам /,
'спартыўны&#160;клюб ':/спартклюб /,
'турыстычны&#160;паход ':/турпаход /,
/* ах > ох */
// '(о$1а)(а$1о)х ':/о(\S*)ах /,
// '(ё$1а)(я$1о)х ':/ё(\S*)ах /,
// '(о$1я)(а$1ё)х ':/о(\S*)ях /,
// '(ё$1я)(я$1ё)х ':/ё(\S*)ях /,
// '$1(а)(о)х ':/(\S)ах /,
// '$1(я)(ё)х ':/(\S)ях /,
// 'цытадэлях':/цытадэл\(ях\)\(ёх\)/,
'$1(а)(о)х ':/(бацьк|бераг|брат|вач|вуш|гарад|даждж|дзьвяр|зуб|кіраўнік|кут|канц|ляс|на[гч]|пляч|пяск|раз|рук|сад|склад|стал|сын|сябр|хвальк|хляв)ах /,
'$1(я)(ё)х ':/(агн|вучн|грудз|каран|касьц)ях /,
'$1(ля)(лё)х ':/(кара|па)лях /,
'в(о$1а)(а$1о)х ':/во(л|ч)ах /,
'дз(еўка)(яўко)х ':/дзеўках /,
'жл(оба)(або)х ':/жлобах /,
'м(олата)(алато)х ':/молатах /,
'р(ода)(адо)х ':/родах /,
/* а + ні */
' (н)(ан)і$1 ':/ ні(хто|чога|што) /,
' (нік$1)(аніко)$2 ':/ нік(а|о)(га|му) /,
/* г > ґ */
' аґр$1 ':/ агр([ауы]|ай) /,
' ґа$1 ':/ га(ем?|й|ю|я) /,
' ґан$1к':/ ган(а?)к/,
' ґа$1 ':/ га([нз][аеуы]|ай) /,
'ґ$1ртын':/г(э|е)ртын/,
' навіґа$1':/ навіга(ц|т)/,
/* Поўныя формы */
' $1цыяў ':/ (апэра|кампазы|кампіля|кампэнса|кантрыбу|канфэрэн|карэля|каўза|на|пазы|прэфэрэн|рэкамэнда|(?:рэпа)?ра|сымуля|сытуа|трады|трапэ|экспэды|эксплюата)цый /,
' $1ыяў ':/ (акц|імпэр|стыпэнд|сымпат|с[ыэ]р|сымэтр)ый /,
' $1іяў ':/ (ліб|мітрапол|прафэс|пэрс|сылез|сымфон|сыцыл|сэс|трансыльван|флятыл)ій /,
' $1аў ':/ (абрэвіятур|асоб|войск|гадзін|гор|дзяўчат|жанчын|камэр|кас|краін|крам|літар|малекул|марфем|мініятур|мужчын|налад|паводзін|плянэт|плятформ|правіл|пэрсон|рыс|рэклям|сіл|служб|сфэр|сыстэм|тэмпэратур|тэм|улад|хвілін|цыгар(?:эт)?|эстафэт) /,
' $1оваў ':/ (др|кар|м|прапан|сл|устан)оў /,
' пэрспэктываў ':/ пэрспэктыў /,
' земляў ':/ зямель /,
' яблыняў ':/ яблынь /,
' расеяў ':/ расей /,
};

const softers = {
'$1ь$1$2':/([лнц])\1([еёіюяь])/,
'$1ь$1$2 ':/([лнц])ь([еіюя]) /,
'$1дзьдз$2':/(\S\S)дз?дз([еёіюяь])/,
	'аддз$1л':/адзьдз(е|я)л/,
	' $1аддз':/ (п|н|пе?р)адзьдз/,
'люччы ':/лучч?ы /,
'зь$1':/з(([бвзлмн]|дз)[еёіюяь])/,
'сь$1':/с([влмнпсфц][еёіюяь])/,
'ць$1':/ц([влм][еёіюяь])/,
'$1ь $2$3':`( (?:б[ея]|пра|цера)?з) (\\(?)([еёюяь]|([бвзйлмнпстфц]|дз)[еёіюяь]|імі? |іх(?:ні)?|${iwords})`,
'$1ь$2':/(с|з)’([яюеё])/,
};

let gwords = [
'абрызґл',
' аґюст',
'анґель',
'анґол',
'арґаніз',
'арґент',
'арлінґтан',
'арыґінал',
' аўґс',
'аўґуст',
'аґрэст',
' біґ ',
' бразґ',
'буґацьці',
'бурґ',
'вашынґт',
'возґр',
'вэдзґа',
' гааґ',
' ґабрыел',
' ґазэт',
' ґаксон',
' ґалац',
' ґалґоф',
' ґалер',
' ґаліле',
' ґальґот',
' ґамбі',
' ґарант',
' ґарсэт',
'ґарыбальдзі',
' ґаўс',
' ґаян',
'ґвалт',
' геґел',
' ґедзімін',
' ґейл',
' ґеймінґ',
' ґейм',
' ґелер',
' ґент',
' ґеорґ',
' ґервя',
'ґерґета',
' ґётэ ',
' ґзымс',
' ґіём',
' ґітлін',
' ґлазґа ',
' ґліцэрын',
' ґлясар',
' ґонт',
' ґот',
' ґоцц',
' ґрадус',
'ґранд',
' ґрош',
'ґрунт',
' ґрэйвэз',
'ґрэнобл',
'ґрэнлянд',
' ґузік',
' ґуст ',
' ґэлап',
' ґэры ',
' ґяд',
' ґяндж',
' джамалунґм',
' джґа',
' ірвінґ',
' іґнар',
' інтэґр',
' інтэліґен',
' калеґ',
' кіплінґ',
' лонґ',
' лэнґлі ',
' мазґ',
' мэґі ',
' мяґі ',
'нінґен',
' ніяґар',
'плявузґ',
'праґрам',
' руґен',
' розґ',
' ролінґ',
' рэґенс',
' рэдынґ',
' сіґітас',
' сійґ',
'райхстаґ',
' уґанд',
'фоґель',
' цуґл',
'шваґер'
];

const latinLetters = {
'$1je':'([аеёіоуыюяь’ ]\\(?)е',
'$1jo':'([аеёіоуыюяь’ ]\\(?)ё',
'$1ju':'([аеёіоуыюяь’ ]\\(?)ю',
'$1ja':'([аеёіоуыюяь’ ]\\(?)я',
'':'’',
'ć':'ць',
'ź':'зь',
'ś':'сь',
'ń':'нь',
'l':'ль',
'a':'а',
'b':'б',
'v':'в',
'h':'г',
'g':'ґ',
'd':'д',
'ie':'е',
'io':'ё',
'ž':'ж',
'z':'з',
'i':'і',
'j':'й',
'k':'к',
'ł':'л',
'm':'м',
'n':'н',
'o':'о',
'p':'п',
'r':'р',
's':'с',
't':'т',
'u':'у',
'ŭ':'ў',
'f':'ф',
'ch':'х',
'c':'ц',
'č':'ч',
'š':'ш',
'y':'ы',
'e':'э',
'iu':'ю',
'ia':'я',
'li':'łi',
'l$1':'li([eoua])'
};

let soft = '\u0652([еёіюяь])';
let presoft = '([تزكثࢮбвгджзйклмнпрстфхцчшў])\u0652?(\u0651?)';

const arabLetters = {
' لا':/ л[ая]/,
'ـلا':/л[ая]/,
'$1\u0651':/([бвгджзйклмнпрстфхцчшў]|д[зж])\1/, // падваеньне зычнага, шадда
'$1\u0652':/([бвгджзйклмнпрстфхцчшў])/, // няма галоснага, сукун
'\u0627а':/а/, // а, аліф
' \u0627$1':/ ([еэыуо])/, // першая галосная, аліф
'ࢮ$1':'д\u0652з'+soft,
'ز$1':'з'+soft,
'ك$1':'к'+soft,
'ث$1':'с'+soft,
'ت$1':'т'+soft,
'$1ы':/([تزكث])і/,
// $2 - шадда
'$1$2\u064E':presoft+'[аяэе]',
'$1$2\u0650':presoft+'[іы]',
' \u0627\u0650 ':/ і /,
'$1$2\u064F':presoft+'[оёую]',
'ع':/’/,
'':/ь/,
// '':/[ь’]/,
'ي\u064E':/[яе]/,
'ي\u0650':/і/,
'ي\u064F':/[ёю]/,
'\u064E':/[аэ]/,
'\u0650':/[ыі]/,
'\u064F':/[оу]/,
'ب':/б/,
'و':/[вў]/,
'ه':/г/,
'غ':/ґ/,
'ج':/д\u0652ж/,
'د':/д/,
'ژ':/ж/,
'ض':/з/,
'ي':/й/,
'ق':/к/,
'ل':/л/,
'م':/м/,
'ن':/н/,
'پ':/п/,
'ر':/р/,
'ص':/с/,
'ط':/т/,
'ف':/ф/,
'ح':/х/,
'ࢯ':/ц/,
'چ':/ч/,
'ش':/ш/,
'،':/\,/,
'؟':/\?/
};
// let presoft = '([تزكثࢮбвгджзйклмнпрстфхцчшў\u0627])\u0652?(\u0651?)';

// const arabLetters = {
// ' لا':/ л[ая]/,
// 'ـلا':/л[ая]/,
// '$1\u0651':/([бвгджзйклмнпрстфхцчшў]|д[зж])\1/, // падваеньне зычнага, шадда
// '$1\u0652':/([бвгджзйклмнпрстфхцчшў])/, // няма галоснага, сукун
// ' \u0627$1':/ ([аеэіыуо])/, // першая галосная, аліф
// 'ࢮ$1':/д\u0652з/+soft,
// 'ز$1':/з/+soft,
// 'ك$1':/к/+soft,
// 'ث$1':/с/+soft,
// 'ت$1':/т/+soft,
// '$1ы':/([تزكث])і/,
// // $2 - шадда
// '$1$2\u064E':presoft+'[аяэе]',
// '$1$2\u0650':presoft+'[іы]',
// '$1$2\u064F':presoft+'[оёую]',
// '':/[ь’]/,
// 'ي\u064E':/[яе]/,
// 'ي\u0650':/і/,
// 'ي\u064F':/[ёю]/,
// '\u064E':/[аэ]/,
// '\u0650':/[ыі]/,
// '\u064F':/[оу]/,
// 'ب':/б/,
// 'و':/[вў]/,
// 'ه':/г/,
// 'غ':/ґ/,
// 'ج':/д\u0652ж/,
// 'د':/д/,
// 'ژ':/ж/,
// 'ض':/з/,
// 'ي':/й/,
// 'ق':/к/,
// 'ل':/л/,
// 'م':/м/,
// 'ن':/н/,
// 'پ':/п/,
// 'ر':/р/,
// 'ص':/с/,
// 'ط':/т/,
// 'ف':/ф/,
// 'ح':/х/,
// 'ࢯ':/ц/,
// 'چ':/ч/,
// 'ش':/ш/,
// '،':/\,/,
// '؟':/\?/
// };

