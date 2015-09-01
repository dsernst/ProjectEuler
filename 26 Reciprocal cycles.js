// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2 =   0.5
// 1/3 =   0.(3)
// 1/4 =   0.25
// 1/5 =   0.2
// 1/6 =   0.1(6)
// 1/7 =   0.(142857)
// 1/8 =   0.125
// 1/9 =   0.(1)
// 1/10  =   0.1
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

var upperLimit = 1000;

var precision = 3000;
var Decimal = require('decimal.js').config({precision: precision});

String.prototype.doesTerminate = function () {
  // Does our decimal representation terminate?
  return this.length < precision;
};


String.prototype.findCycleInString = function () {
  // handle the simple case where the decimal terminates
  if (this.doesTerminate()) {
    return {cycle: this.toString(), cycleLength: 0};
  }

  var searchSpace = this.slice(2, -1); // ignore before decimal place & rounding errors
  // console.log(searchSpace);
  var cycleStart = 0;
  var cycleEnd = 1;
  searchSpace.split('').some(function (character, index) {
    var re = new RegExp(character, 'g');
    var found = -1;
    while (found < index) {
      re.test(searchSpace); // let the RegExp find itself first
      found = re.lastIndex - 1;
    }
    var firstCycle, nextCycle, nextNextCycle;
    while (re.test(searchSpace)) { // find next occurance of this character
      found = re.lastIndex - 1;
      firstCycle = searchSpace.slice(index, found);
      nextCycle = searchSpace.slice(found, (2 * found) - index);
      nextNextCycle = searchSpace.slice((2 * found) - index, (3 * found) - 2 * index);
      // console.log(index, re, found);
      // console.log(firstCycle, nextCycle, nextNextCycle);
      if (firstCycle === nextCycle && nextCycle === nextNextCycle) {
        // we found a match!
        // console.log('we found a match!');
        cycleEnd = found;
        return true;
      }
    }

    // we didn't see this character again: we must not be in a cycle yet
    cycleStart++;
    return;

  });
  return {
    cycle: '0.' + searchSpace.slice(0, cycleStart) + '(' + searchSpace.slice(cycleStart, cycleEnd) + ')',
    cycleLength: cycleEnd - cycleStart
  };
};




function testPatternFinder(d) {
  var info = {
    d: d,
    decimal: Decimal.ONE.dividedBy(d).toString(),
  };
  var cycleInfo = info.decimal.findCycleInString();
  info.cycle_ = cycleInfo.cycle; // added extra character for better debugging alignment
  info.cycleLength = cycleInfo.cycleLength;

  // if (!info.decimal.doesTerminate()) {
  // if (info.cycle_.slice(-2) === '()') {
  console.log(info);
  // }
  // }

  return info;
}


// // test individual cases of reciprocal cycles:
// // -------------------------------------------

// // when the decimal terminates
// testPatternFinder(2); // 0.5

// // simple single digit repeating number
// testPatternFinder(3); // 0.(3)

// // non-repeating characters before cycle
// testPatternFinder(6); // 0.1(6)

// // longer cycles
// testPatternFinder(7); // 0.(142857)

// // duplicate numbers within cycle
// testPatternFinder(17); // 0.(0588235294117647)

// // first number of cycle appears more than once within cycle
// testPatternFinder(23); // 0.(0434782608695652173913)

// // first number of cycle immediately repeats itself
// testPatternFinder(84); // 0.01(190476)

// // long cycles require high precision (> 150), especially with extra cycle checks
// testPatternFinder(59); // 0.(0169491525423728813559322033898305084745762711864406779661)

// // some require precision above 500
// testPatternFinder(223);


var Heap = require('heap');
var maxHeap = new Heap(function largestCycleLength(a, b) {
  return b.cycleLength - a.cycleLength;
});

var _ = require('lodash');

_.range(2, upperLimit).forEach(function (d) {
  var info = testPatternFinder(d);
  maxHeap.push(info);
});

console.log('');
console.log(maxHeap.pop()); // we'll use this to see which d < 1000 has the longest cycle
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());
console.log(maxHeap.pop());


{ d: 983,
  decimal: '0.00101729399796541200406917599186164801627670396744659206510681586978636826042726347914547304170905391658189216683621566632756866734486266531027466937945066124109867751780264496439471007121057985757884028484231943031536113936927772126144455747711088504577822990844354018311291963377416073245167853509664292980671414038657171922685656154628687690742624618514750762970498474059003051881993896236012207527975584944048830111902339776195320447609359104781281790437436419125127161749745676500508646998982706002034587995930824008138351983723296032553407934893184130213631739572736520854526958290946083418107833163784333672431332655137334689725330620549338758901322482197355035605289928789420142421159715157680569684638860630722278738555442522889114954221770091556459816887080366225839267548321464903357070193285859613428280773143438453713123092573753814852492370295015259409969481180061037639877924720244150559511698880976602238046795523906408952187182095625635808748728382502543234994913530010172939979654120040691759918616480162767039674465920651068158697863682604272634791454730417090539165818921668362156663275686673448626653102746693794506612410986775178026449643947100712105798575788402848423194303153611393692777212614445574771108850457782299084435401831129196337741607324516785350966429298067141403865717192268565615462868769074262461851475076297049847405900305188199389623601220752797558494404883011190233977619532044760935910478128179043743641912512716174974567650050864699898270600203458799593082400813835198372329603255340793489318413021363173957273652085452695829094608341810783316378433367243133265513733468972533062054933875890132248219735503560528992878942014242115971515768056968463886063072227873855544252288911495422177009155645981688708036622583926754832146490335707019328585961342828077314343845371312309257375381485249237029501525940996948118006103763987792472024415055951169888097660223804679552390640895218718209562563580874872838250254323499491353001017293997965412004069175991861648016276703967446592065106815869786368260427263479145473041709053916581892166836215666327568667344862665310274669379450661241098677517802644964394710071210579857578840284842319430315361139369277721261444557477110885045778229908443540183112919633774160732451678535096642929806714140386571719226856561546286876907426246185147507629704984740590030518819938962360122075279755849440488301119023397761953204476093591047812817904374364191251271617497456765005086469989827060020345879959308240081383519837232960325534079348931841302136317395727365208545269582909460834181078331637843336724313326551373346897253306205493387589013224821973550356052899287894201424211597151576805696846388606307222787385554425228891149542217700915564598168870803662258392675483214649033570701932858596134282807731434384537131230925737538148524923702950152594099694811800610376398779247202441505595116988809766022380467955239064089521871820956256358087487283825025432349949135300101729399796541200406917599186164801627670396744659207',
  cycle_: '0.(0010172939979654120040691759918616480162767039674465920651068158697863682604272634791454730417090539165818921668362156663275686673448626653102746693794506612410986775178026449643947100712105798575788402848423194303153611393692777212614445574771108850457782299084435401831129196337741607324516785350966429298067141403865717192268565615462868769074262461851475076297049847405900305188199389623601220752797558494404883011190233977619532044760935910478128179043743641912512716174974567650050864699898270600203458799593082400813835198372329603255340793489318413021363173957273652085452695829094608341810783316378433367243133265513733468972533062054933875890132248219735503560528992878942014242115971515768056968463886063072227873855544252288911495422177009155645981688708036622583926754832146490335707019328585961342828077314343845371312309257375381485249237029501525940996948118006103763987792472024415055951169888097660223804679552390640895218718209562563580874872838250254323499491353)',
  cycleLength: 982 }


// Congratulations, the answer you gave to problem 26 is correct.

// You are the 49194th person to have solved this problem.
