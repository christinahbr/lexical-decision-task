/************* 
 * Task Test *
 *************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'task';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
};

// Start code blocks for 'Before Experiment'
/* Automatically exit if the experiment is running on a mobile device */
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  quitPsychoJS('Unfortunately, this study cannot be run on a mobile device!', true)
}
/* functions to replace functions from python packages
that don't work in javascript*/




function SeededRNG(seed) {
    this.m = 0x80000000; // 2^31;
    this.a = 1103515245;
    this.c = 12345;
    this.state = seed ? seed % (this.m - 1) : 123456789; // seed
    this.next = function() {
        this.state = (this.a * this.state + this.c) % this.m;
        return this.state / this.m;
    };
}


function seededShuffle(array, seed) {
    const rng = new SeededRNG(seed);
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(rng.next() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



/*
// A custom shuffle function that uses a seeded random number generator
function seededShuffle(array, seed) {
    let rng = Math.seedrandom(seed);
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // swap elements
    }
}
*/

/*
function new_shuffle(array, seed) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(my_random(seed) * m);
    seed++;  // increment the seed for the next iteration
    
    // Decrease m for the next iteration
    m--;

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
*/

/*
function my_random(seed) {
  var x = Math.sin(seed + 1) * 10000; // increment seed here to make the function pure
  return x - Math.floor(x);
}
*/


function list(s) {
            // if s is a string, we return a list of its characters
            if (typeof s === 'string')
                return s.split('');
            else
                // otherwise we return s:
                return s;
        }
// Run 'Before Experiment' code from get_run_files
const stim_dir = 'stims';
const n_runs = 9;
//const n_selected_runs = 12; // runs to display
const n_trials = 10;
const n_practice = 12;
// Run 'Before Experiment' code from set_vars
let word_position = [0, 0]
let image_position = [0, 0]
let pr_remind_position = [0, -0.2]
let instruction_text_size = 0.06
let space_reminder_text_size = 0.045
let stim_text_size = 0.1
let base_word_time = 2
let base_image_time = 1.5
let target_word_time = 2
let fixation_time = 1.5
let base_image_start = fixation_time + 0.2
let base_word_start = base_image_start + base_image_time + 0.1
let target_word_start = .2 // changed from 0.2 + base_image_time
// Run 'Before Experiment' code from instructs_code
let current_instr = 0;
// Run 'Before Experiment' code from welc_code_2
let current_instr_2 = 0;

function simpleChecksum(str) {
    return Array.from(str).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}


function generateRunSeed(pid, runNumber) {
    let modifiedPid = pid.toString() + runNumber.toString();
    return simpleChecksum(modifiedPid);
}

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(init_codeRoutineBegin());
flowScheduler.add(init_codeRoutineEachFrame());
flowScheduler.add(init_codeRoutineEnd());
const instructionsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instructionsLoopBegin(instructionsLoopScheduler));
flowScheduler.add(instructionsLoopScheduler);
flowScheduler.add(instructionsLoopEnd);
flowScheduler.add(remindRoutineBegin());
flowScheduler.add(remindRoutineEachFrame());
flowScheduler.add(remindRoutineEnd());
flowScheduler.add(final_directRoutineBegin());
flowScheduler.add(final_directRoutineEachFrame());
flowScheduler.add(final_directRoutineEnd());
const practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practiceLoopBegin(practiceLoopScheduler));
flowScheduler.add(practiceLoopScheduler);
flowScheduler.add(practiceLoopEnd);
flowScheduler.add(pr_earlyRoutineBegin());
flowScheduler.add(pr_earlyRoutineEachFrame());
flowScheduler.add(pr_earlyRoutineEnd());
flowScheduler.add(pr_missedRoutineBegin());
flowScheduler.add(pr_missedRoutineEachFrame());
flowScheduler.add(pr_missedRoutineEnd());
const instructions_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instructions_2LoopBegin(instructions_2LoopScheduler));
flowScheduler.add(instructions_2LoopScheduler);
flowScheduler.add(instructions_2LoopEnd);
flowScheduler.add(select_routineRoutineBegin());
flowScheduler.add(select_routineRoutineEachFrame());
flowScheduler.add(select_routineRoutineEnd());
const runsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(runsLoopBegin(runsLoopScheduler));
flowScheduler.add(runsLoopScheduler);
flowScheduler.add(runsLoopEnd);
flowScheduler.add(completion_msgRoutineBegin());
flowScheduler.add(completion_msgRoutineEachFrame());
flowScheduler.add(completion_msgRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stims/runs/images/10-alt.jpg', 'path': 'stims/runs/images/10-alt.jpg'},
    {'name': 'stims/runs/images/7-alt.jpg', 'path': 'stims/runs/images/7-alt.jpg'},
    {'name': 'stims/runs/images/14.jpg', 'path': 'stims/runs/images/14.jpg'},
    {'name': 'stims/instructions/instructions_D.csv', 'path': 'stims/instructions/instructions_D.csv'},
    {'name': 'stims/runs/unique_subset_2.csv', 'path': 'stims/runs/unique_subset_2.csv'},
    {'name': 'stims/counterbalance/word_on_left_full.jpg', 'path': 'stims/counterbalance/word_on_left_full.jpg'},
    {'name': 'stims/runs/images/14-alt.jpg', 'path': 'stims/runs/images/14-alt.jpg'},
    {'name': 'stims/runs/images/2.jpg', 'path': 'stims/runs/images/2.jpg'},
    {'name': 'stims/counterbalance/good_on_left.jpg', 'path': 'stims/counterbalance/good_on_left.jpg'},
    {'name': 'stims/runs/images/9.jpg', 'path': 'stims/runs/images/9.jpg'},
    {'name': 'stims/fixation_cross.jpg', 'path': 'stims/fixation_cross.jpg'},
    {'name': 'stims/runs/images/12-alt.jpg', 'path': 'stims/runs/images/12-alt.jpg'},
    {'name': 'stims/runs/images/16-alt.jpg', 'path': 'stims/runs/images/16-alt.jpg'},
    {'name': 'stims/runs/unique_subset_3.csv', 'path': 'stims/runs/unique_subset_3.csv'},
    {'name': 'stims/runs/images/9-alt.jpg', 'path': 'stims/runs/images/9-alt.jpg'},
    {'name': 'stims/runs/images/4-alt.jpg', 'path': 'stims/runs/images/4-alt.jpg'},
    {'name': 'stims/practice/9.jpg', 'path': 'stims/practice/9.jpg'},
    {'name': 'stims/runs/images/15.jpg', 'path': 'stims/runs/images/15.jpg'},
    {'name': 'stims/practice/8.jpg', 'path': 'stims/practice/8.jpg'},
    {'name': 'stims/runs/images/5-alt.jpg', 'path': 'stims/runs/images/5-alt.jpg'},
    {'name': 'stims/runs/images/20-alt.jpg', 'path': 'stims/runs/images/20-alt.jpg'},
    {'name': 'stims/counterbalance/word_on_right.jpg', 'path': 'stims/counterbalance/word_on_right.jpg'},
    {'name': 'stims/runs/images/12.jpg', 'path': 'stims/runs/images/12.jpg'},
    {'name': 'stims/practice/12.jpg', 'path': 'stims/practice/12.jpg'},
    {'name': 'stims/practice/2.jpg', 'path': 'stims/practice/2.jpg'},
    {'name': 'stims/runs/images/19.jpg', 'path': 'stims/runs/images/19.jpg'},
    {'name': 'stims/runs/images/11.jpg', 'path': 'stims/runs/images/11.jpg'},
    {'name': 'stims/instructions/instructions_2A.csv', 'path': 'stims/instructions/instructions_2A.csv'},
    {'name': 'stims/practice/11.jpg', 'path': 'stims/practice/11.jpg'},
    {'name': 'stims/runs/images/1-alt.jpg', 'path': 'stims/runs/images/1-alt.jpg'},
    {'name': 'stims/practice/7.jpg', 'path': 'stims/practice/7.jpg'},
    {'name': 'stims/runs/images/18-alt.jpg', 'path': 'stims/runs/images/18-alt.jpg'},
    {'name': 'stims/practice/10.jpg', 'path': 'stims/practice/10.jpg'},
    {'name': 'stims/runs/images/13.jpg', 'path': 'stims/runs/images/13.jpg'},
    {'name': 'stims/runs/images/19-alt.jpg', 'path': 'stims/runs/images/19-alt.jpg'},
    {'name': 'stims/runs/images/2-alt.jpg', 'path': 'stims/runs/images/2-alt.jpg'},
    {'name': 'stims/runs/images/11-alt.jpg', 'path': 'stims/runs/images/11-alt.jpg'},
    {'name': 'stims/practice/3.jpg', 'path': 'stims/practice/3.jpg'},
    {'name': 'stims/runs/unique_subset_7.csv', 'path': 'stims/runs/unique_subset_7.csv'},
    {'name': 'stims/runs/images/16.jpg', 'path': 'stims/runs/images/16.jpg'},
    {'name': 'stims/runs/images/6.jpg', 'path': 'stims/runs/images/6.jpg'},
    {'name': 'stims/practice/16.jpg', 'path': 'stims/practice/16.jpg'},
    {'name': 'stims/runs/unique_subset_9.csv', 'path': 'stims/runs/unique_subset_9.csv'},
    {'name': 'stims/practice/14.jpg', 'path': 'stims/practice/14.jpg'},
    {'name': 'stims/runs/images/4.jpg', 'path': 'stims/runs/images/4.jpg'},
    {'name': 'stims/counterbalance/word_on_right_full.jpg', 'path': 'stims/counterbalance/word_on_right_full.jpg'},
    {'name': 'stims/runs/unique_subset_6.csv', 'path': 'stims/runs/unique_subset_6.csv'},
    {'name': 'stims/runs/images/8.jpg', 'path': 'stims/runs/images/8.jpg'},
    {'name': 'stims/instructions/instructions_A.csv', 'path': 'stims/instructions/instructions_A.csv'},
    {'name': 'stims/practice/13.jpg', 'path': 'stims/practice/13.jpg'},
    {'name': 'stims/counterbalance/good_on_right.jpg', 'path': 'stims/counterbalance/good_on_right.jpg'},
    {'name': 'stims/runs/images/1.jpg', 'path': 'stims/runs/images/1.jpg'},
    {'name': 'stims/runs/unique_subset_12.csv', 'path': 'stims/runs/unique_subset_12.csv'},
    {'name': 'stims/counterbalance/word_on_left.jpg', 'path': 'stims/counterbalance/word_on_left.jpg'},
    {'name': 'stims/runs/unique_subset_8.csv', 'path': 'stims/runs/unique_subset_8.csv'},
    {'name': 'stims/runs/images/17-alt.jpg', 'path': 'stims/runs/images/17-alt.jpg'},
    {'name': 'stims/runs/images/3-alt.jpg', 'path': 'stims/runs/images/3-alt.jpg'},
    {'name': 'stims/practice/5.jpg', 'path': 'stims/practice/5.jpg'},
    {'name': 'stims/runs/images/13-alt.jpg', 'path': 'stims/runs/images/13-alt.jpg'},
    {'name': 'stims/runs/unique_subset_11.csv', 'path': 'stims/runs/unique_subset_11.csv'},
    {'name': 'stims/runs/run_practice.csv', 'path': 'stims/runs/run_practice.csv'},
    {'name': 'stims/runs/images/6-alt.jpg', 'path': 'stims/runs/images/6-alt.jpg'},
    {'name': 'stims/runs/images/8-alt.jpg', 'path': 'stims/runs/images/8-alt.jpg'},
    {'name': 'stims/practice/4.jpg', 'path': 'stims/practice/4.jpg'},
    {'name': 'stims/runs/images/17.jpg', 'path': 'stims/runs/images/17.jpg'},
    {'name': 'stims/runs/images/18.jpg', 'path': 'stims/runs/images/18.jpg'},
    {'name': 'stims/practice/15.jpg', 'path': 'stims/practice/15.jpg'},
    {'name': 'stims/runs/images/3.jpg', 'path': 'stims/runs/images/3.jpg'},
    {'name': 'stims/runs/unique_subset_4.csv', 'path': 'stims/runs/unique_subset_4.csv'},
    {'name': 'stims/runs/unique_subset_1.csv', 'path': 'stims/runs/unique_subset_1.csv'},
    {'name': 'stims/runs/images/7.jpg', 'path': 'stims/runs/images/7.jpg'},
    {'name': 'stims/runs/images/5.jpg', 'path': 'stims/runs/images/5.jpg'},
    {'name': 'stims/instructions/instructions_2D.csv', 'path': 'stims/instructions/instructions_2D.csv'},
    {'name': 'stims/runs/unique_subset_5.csv', 'path': 'stims/runs/unique_subset_5.csv'},
    {'name': 'stims/runs/images/10.jpg', 'path': 'stims/runs/images/10.jpg'},
    {'name': 'stims/practice/6.jpg', 'path': 'stims/practice/6.jpg'},
    {'name': 'stims/runs/unique_subset_10.csv', 'path': 'stims/runs/unique_subset_10.csv'},
    {'name': 'stims/runs/images/15-alt.jpg', 'path': 'stims/runs/images/15-alt.jpg'},
    {'name': 'stims/practice/1.jpg', 'path': 'stims/practice/1.jpg'},
    {'name': 'stims/runs/images/20.jpg', 'path': 'stims/runs/images/20.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}`);


  return Scheduler.Event.NEXT;
}


var init_codeClock;
var run_files;
var pid;
var word_is_left;
var welcomeClock;
var instructs_txt;
var space_remind;
var space_resp;
var instruction_line;
var instr_list;
var instr_csv;
var instr_obj;
var instr_file;
var instr_num;
var remindClock;
var space_resp_3;
var space_remind_2;
var counterbalanced_1;
var counterbalanced_2;
var instr_counter;
var image;
var final_directClock;
var space_resp_4;
var space_remind_3;
var practice_codeClock;
var pr_base_image;
var pr_base_word;
var pr_target_word;
var pr_target_condition;
var pr_correct_answer_1;
var pr_correct_answer_2;
var pr_base_images;
var pr_base_words;
var pr_target_words;
var pr_target_conditions;
var pr_correct_answers_1;
var pr_correct_answers_2;
var pr_counter;
var pr_baseClock;
var early_keys_pr;
var on_time_pr;
var pr_fixation;
var pr_image;
var pr_word_1;
var pr_kb_msg;
var pr_key_presses;
var pr_remind_2;
var fixClock;
var pr_fixation_2;
var pr_targetClock;
var pr_target_keys;
var pr_remind;
var pr_word_2;
var pr_earlyClock;
var early_remind;
var space_remind2;
var to_continue;
var pr_missedClock;
var missed_remind;
var space_remind3;
var to_continue2;
var add_instructsClock;
var space_resp_2;
var instructions_txt_2;
var instruction_line_2;
var instr_list_2;
var instr_csv_2;
var instr_obj_2;
var instr_file_2;
var instr_num_2;
var space_bar_reminder_2;
var select_routineClock;
var run_codeClock;
var seeds;
var seedForRun;
var run_counter;
var trial_within_experiment;
var base_image;
var base_word;
var target_word;
var target_condition;
var correct_answer_1;
var correct_answer_2;
var end_run_msg;
var base_images;
var base_words;
var target_words;
var target_conditions;
var correct_answers_1;
var correct_answers_2;
var image_opacity;
var trial_codeClock;
var baseClock;
var early_keys;
var on_time;
var base_pair_image;
var base_pair_word;
var fixation_cross;
var targetClock;
var on_time_2;
var target_word_random_2;
var earlyClock;
var early_txt;
var space_remind2_2;
var to_continue_3;
var missedClock;
var missed_txt;
var space_msg;
var to_cont;
var end_runClock;
var end_run_txt;
var continue_resp;
var space_bar_reminder_3;
var completion_msgClock;
var final_screen_3;
var submit_task;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "init_code"
  init_codeClock = new util.Clock();
  // Run 'Begin Experiment' code from get_run_files
  run_files = ['runs/unique_subset_1.csv',
  'runs/unique_subset_2.csv',
  'runs/unique_subset_3.csv',
  'runs/unique_subset_4.csv',
  'runs/unique_subset_5.csv',
  'runs/unique_subset_6.csv',
  'runs/unique_subset_7.csv',
  'runs/unique_subset_8.csv',
  'runs/unique_subset_9.csv',
  'runs/unique_subset_10.csv',
  'runs/unique_subset_11.csv',
  'runs/unique_subset_12.csv'];
  
  /* using PID as seed, create array of 6 numbers
  these 6 numbers will be used as seeds
  to generate a unique image order for each run */
  // Attempt to parse participant ID
  pid = parseInt(expInfo['participant']);
  
  // Check if parsing was unsuccessful (result is NaN)
  if (isNaN(pid)) {
      // Alert the participant
      alert("Invalid participant ID. Please refresh the page and enter a valid number.");
  
      // Optionally, you can end the experiment or redirect them to the start
      document.location.reload(); // This will refresh the page
  }
  
  // word_is_left = (pid % 2);
  word_is_left = (pid % 2) + 1
  
  // Shuffle run_files using pid as seed
  run_files = seededShuffle(run_files, pid);
  console.log("seeded shuffled runs: ", run_files)
  
  
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  instructs_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructs_txt',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: instruction_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  space_remind = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_remind',
    text: 'Press the space bar to continue.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, (- 0.3)], height: space_reminder_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0039, 0.0039, 0.0039]),  opacity: undefined,
    depth: -1.0 
  });
  
  space_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from instructs_code
  instruction_line = ""
  instr_list = []
  if (word_is_left === 1) {
      instr_csv = `${stim_dir}/instructions/instructions_A.csv`;
  } else if (word_is_left === 2) {
      instr_csv = `${stim_dir}/instructions/instructions_D.csv`;
  }
  
  instr_obj = new TrialHandler({
   psychoJS: psychoJS,
   nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
   extraInfo: expInfo, originPath: undefined,
   trialList: instr_csv,
   seed: undefined, name: 'instr_obj'
  });
  
  instr_file = instr_obj.getTrialList()
  instr_num = instr_file.length
  for (var i, _pj_c = 0, _pj_a = util.range(instr_num), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      instruction_line = instr_file[i]["instr_list"]
      instr_list.push(instruction_line)
  }
  // Initialize components for Routine "remind"
  remindClock = new util.Clock();
  space_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  space_remind_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_remind_2',
    text: 'Press the space bar to continue.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, (- 0.3)], height: space_reminder_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0039, 0.0039, 0.0039]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Run 'Begin Experiment' code from counterbal_2
  counterbalanced_1 = "";
  counterbalanced_2 = "";
  instr_counter = "";
  
  if ((word_is_left === 1)) {
      counterbalanced_1 = `${stim_dir}/counterbalance/good_on_left.jpg`;
      counterbalanced_2 = `${stim_dir}/counterbalance/word_on_left.jpg`;
      instr_counter = `${stim_dir}/counterbalance/word_on_left_full.jpg`;
  } else {
      counterbalanced_1 = `${stim_dir}/counterbalance/good_on_right.jpg`;
      counterbalanced_2 = `${stim_dir}/counterbalance/word_on_right.jpg`;
      instr_counter = `${stim_dir}/counterbalance/word_on_right_full.jpg`;
   }
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : instr_counter, mask : undefined,
    ori : 0.0, pos : image_position, size : [1, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "final_direct"
  final_directClock = new util.Clock();
  space_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  space_remind_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_remind_3',
    text: "You'll now complete a few practice rounds to get familiar with the task. Practice rounds include key reminders, which won't appear in the actual task. Press the space bar to begin the practice rounds.",
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: instruction_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "practice_code"
  practice_codeClock = new util.Clock();
  // Run 'Begin Experiment' code from get_pr_info
  pr_base_image = "";
  pr_base_word = "";
  pr_target_word = "";
  pr_target_condition = "";
  pr_correct_answer_1 = "";
  pr_correct_answer_2 = "";
  pr_base_images = [];
  pr_base_words = [];
  pr_target_words = [];
  pr_target_conditions = [];
  pr_correct_answers_1 = [];
  pr_correct_answers_2 = [];
  // Run 'Begin Experiment' code from counters_2
  /* initialize counters */
  pr_counter = 0;
  // Initialize components for Routine "pr_base"
  pr_baseClock = new util.Clock();
  early_keys_pr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  on_time_pr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  pr_fixation = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pr_fixation', units : undefined, 
    image : 'stims/fixation_cross.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.58],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  pr_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pr_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : image_position, size : [1, 0.68],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  pr_word_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pr_word_1',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: word_position, height: stim_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), 0.0902]),  opacity: undefined,
    depth: -4.0 
  });
  
  // Run 'Begin Experiment' code from key_code_pr
  pr_kb_msg = "Thank you for not making key presses before the words!";
  
  pr_key_presses = [];
  pr_remind_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pr_remind_2', units : undefined, 
    image : counterbalanced_1, mask : undefined,
    ori : 0.0, pos : pr_remind_position, size : [0.575, 0.25],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  // Initialize components for Routine "fix"
  fixClock = new util.Clock();
  pr_fixation_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pr_fixation_2', units : undefined, 
    image : 'stims/fixation_cross.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.58],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "pr_target"
  pr_targetClock = new util.Clock();
  pr_target_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  pr_remind = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pr_remind', units : undefined, 
    image : counterbalanced_2, mask : undefined,
    ori : 0.0, pos : pr_remind_position, size : [0.575, 0.25],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  pr_word_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pr_word_2',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: word_position, height: stim_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 0.2235), (- 0.4431)]),  opacity: 1.0,
    depth: -3.0 
  });
  
  // Initialize components for Routine "pr_early"
  pr_earlyClock = new util.Clock();
  early_remind = new visual.TextStim({
    win: psychoJS.window,
    name: 'early_remind',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: instruction_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  space_remind2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_remind2',
    text: 'Press the space bar to continue.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, (- 0.3)], height: space_reminder_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0039, 0.0039, 0.0039]),  opacity: undefined,
    depth: -1.0 
  });
  
  to_continue = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pr_missed"
  pr_missedClock = new util.Clock();
  missed_remind = new visual.TextStim({
    win: psychoJS.window,
    name: 'missed_remind',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: instruction_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  space_remind3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_remind3',
    text: 'Press the space bar to continue.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, (- 0.3)], height: space_reminder_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0039, 0.0039, 0.0039]),  opacity: undefined,
    depth: -1.0 
  });
  
  to_continue2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "add_instructs"
  add_instructsClock = new util.Clock();
  space_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instructions_txt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_txt_2',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: instruction_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  // Run 'Begin Experiment' code from welc_code_2
  instruction_line_2 = ""
  instr_list_2 = []
  if ((word_is_left === 1 || word_is_left === 3)) {
      instr_csv_2 = `${stim_dir}/instructions/instructions_2A.csv`;
  } else {
      instr_csv_2 = `${stim_dir}/instructions/instructions_2D.csv`;
  }
  instr_obj_2 = new TrialHandler({
   psychoJS: psychoJS,
   nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
   extraInfo: expInfo, originPath: undefined,
   trialList: instr_csv_2,
   seed: undefined, name: 'instr_obj_2'
  });
  instr_file_2 = instr_obj_2.getTrialList()
  instr_num_2 = instr_file_2.length
  for (var i, _pj_c = 0, _pj_a = util.range(instr_num_2), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      instruction_line_2 = instr_file_2[i]["instr_list"]
      instr_list_2.push(instruction_line_2)
  }
  space_bar_reminder_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_bar_reminder_2',
    text: 'Press the space bar to continue.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, (- 0.3)], height: space_reminder_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0039, 0.0039, 0.0039]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "select_routine"
  select_routineClock = new util.Clock();
  // Initialize components for Routine "run_code"
  run_codeClock = new util.Clock();
  // Run 'Begin Experiment' code from get_run_info
  seeds = [];
  seedForRun = 0;
  for (let i = 1; i <= n_runs; i++) {
      console.log("i is", i);
      seedForRun = generateRunSeed(pid, i);
      console.log(seedForRun);
      seeds.push(seedForRun);
  }
  
  console.log(seeds);
  
  /* initialize counters */
  run_counter = 0;
  trial_within_experiment = 0;
  base_image = "";
  base_word = "";
  target_word = "";
  target_condition = "";
  correct_answer_1 = "";
  correct_answer_2 = "";
  end_run_msg = "";
  base_images = [];
  base_words = [];
  target_words = [];
  target_conditions = [];
  correct_answers_1 = [];
  correct_answers_2 = [];
  image_opacity = 1;
  // Initialize components for Routine "trial_code"
  trial_codeClock = new util.Clock();
  // Initialize components for Routine "base"
  baseClock = new util.Clock();
  early_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  on_time = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  base_pair_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'base_pair_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : image_position, size : [1, 0.68],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  base_pair_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'base_pair_word',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: word_position, height: stim_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), 0.0902]),  opacity: undefined,
    depth: -4.0 
  });
  
  fixation_cross = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fixation_cross', units : undefined, 
    image : 'stims/fixation_cross.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1, 0.58],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "target"
  targetClock = new util.Clock();
  on_time_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  target_word_random_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_word_random_2',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: word_position, height: stim_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 0.2235), (- 0.4431)]),  opacity: 1.0,
    depth: -2.0 
  });
  
  // Initialize components for Routine "early"
  earlyClock = new util.Clock();
  early_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'early_txt',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: instruction_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  space_remind2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_remind2_2',
    text: 'Press the space bar to continue.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, (- 0.3)], height: space_reminder_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0039, 0.0039, 0.0039]),  opacity: undefined,
    depth: -1.0 
  });
  
  to_continue_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "missed"
  missedClock = new util.Clock();
  missed_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'missed_txt',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: instruction_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  space_msg = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_msg',
    text: 'Press the space bar to continue.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, (- 0.3)], height: space_reminder_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0039, 0.0039, 0.0039]),  opacity: undefined,
    depth: -1.0 
  });
  
  to_cont = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_run"
  end_runClock = new util.Clock();
  end_run_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_run_txt',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0.2], height: instruction_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  continue_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  space_bar_reminder_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_bar_reminder_3',
    text: 'When you are ready, press the space bar to continue.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, (- 0.3)], height: space_reminder_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0039, 0.0039, 0.0039]),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "completion_msg"
  completion_msgClock = new util.Clock();
  final_screen_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'final_screen_3',
    text: 'You have finished this portion of the experiment! \n\nPlease press the space bar to submit your task results, then return to Qualtrics and press the the NEXT button.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0.15], height: instruction_text_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  submit_task = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var init_codeComponents;
function init_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'init_code' ---
    t = 0;
    init_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    init_codeComponents = [];
    
    for (const thisComponent of init_codeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function init_codeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'init_code' ---
    // get current time
    t = init_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of init_codeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function init_codeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'init_code' ---
    for (const thisComponent of init_codeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "init_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions;
function instructionsLoopBegin(instructionsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instructions = new TrialHandler({
      psychoJS: psychoJS,
      nReps: instr_num, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instructions'
    });
    psychoJS.experiment.addLoop(instructions); // add the loop to the experiment
    currentLoop = instructions;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstruction of instructions) {
      snapshot = instructions.getSnapshot();
      instructionsLoopScheduler.add(importConditions(snapshot));
      instructionsLoopScheduler.add(welcomeRoutineBegin(snapshot));
      instructionsLoopScheduler.add(welcomeRoutineEachFrame());
      instructionsLoopScheduler.add(welcomeRoutineEnd(snapshot));
      instructionsLoopScheduler.add(instructionsLoopEndIteration(instructionsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instructionsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instructions);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instructionsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practice;
function practiceLoopBegin(practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stims/runs/run_practice.csv',
      seed: pid, name: 'practice'
    });
    psychoJS.experiment.addLoop(practice); // add the loop to the experiment
    currentLoop = practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice of practice) {
      snapshot = practice.getSnapshot();
      practiceLoopScheduler.add(importConditions(snapshot));
      practiceLoopScheduler.add(practice_codeRoutineBegin(snapshot));
      practiceLoopScheduler.add(practice_codeRoutineEachFrame());
      practiceLoopScheduler.add(practice_codeRoutineEnd(snapshot));
      practiceLoopScheduler.add(pr_baseRoutineBegin(snapshot));
      practiceLoopScheduler.add(pr_baseRoutineEachFrame());
      practiceLoopScheduler.add(pr_baseRoutineEnd(snapshot));
      practiceLoopScheduler.add(fixRoutineBegin(snapshot));
      practiceLoopScheduler.add(fixRoutineEachFrame());
      practiceLoopScheduler.add(fixRoutineEnd(snapshot));
      practiceLoopScheduler.add(pr_targetRoutineBegin(snapshot));
      practiceLoopScheduler.add(pr_targetRoutineEachFrame());
      practiceLoopScheduler.add(pr_targetRoutineEnd(snapshot));
      practiceLoopScheduler.add(practiceLoopEndIteration(practiceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var instructions_2;
function instructions_2LoopBegin(instructions_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instructions_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: instr_num_2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instructions_2'
    });
    psychoJS.experiment.addLoop(instructions_2); // add the loop to the experiment
    currentLoop = instructions_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstruction_2 of instructions_2) {
      snapshot = instructions_2.getSnapshot();
      instructions_2LoopScheduler.add(importConditions(snapshot));
      instructions_2LoopScheduler.add(add_instructsRoutineBegin(snapshot));
      instructions_2LoopScheduler.add(add_instructsRoutineEachFrame());
      instructions_2LoopScheduler.add(add_instructsRoutineEnd(snapshot));
      instructions_2LoopScheduler.add(instructions_2LoopEndIteration(instructions_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instructions_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(instructions_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function instructions_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var runs;
function runsLoopBegin(runsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    runs = new TrialHandler({
      psychoJS: psychoJS,
      nReps: n_runs, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'runs'
    });
    psychoJS.experiment.addLoop(runs); // add the loop to the experiment
    currentLoop = runs;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRun of runs) {
      snapshot = runs.getSnapshot();
      runsLoopScheduler.add(importConditions(snapshot));
      runsLoopScheduler.add(run_codeRoutineBegin(snapshot));
      runsLoopScheduler.add(run_codeRoutineEachFrame());
      runsLoopScheduler.add(run_codeRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      runsLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      runsLoopScheduler.add(trialsLoopScheduler);
      runsLoopScheduler.add(trialsLoopEnd);
      runsLoopScheduler.add(earlyRoutineBegin(snapshot));
      runsLoopScheduler.add(earlyRoutineEachFrame());
      runsLoopScheduler.add(earlyRoutineEnd(snapshot));
      runsLoopScheduler.add(missedRoutineBegin(snapshot));
      runsLoopScheduler.add(missedRoutineEachFrame());
      runsLoopScheduler.add(missedRoutineEnd(snapshot));
      runsLoopScheduler.add(end_runRoutineBegin(snapshot));
      runsLoopScheduler.add(end_runRoutineEachFrame());
      runsLoopScheduler.add(end_runRoutineEnd(snapshot));
      runsLoopScheduler.add(runsLoopEndIteration(runsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: n_trials, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trial_codeRoutineBegin(snapshot));
      trialsLoopScheduler.add(trial_codeRoutineEachFrame());
      trialsLoopScheduler.add(trial_codeRoutineEnd(snapshot));
      trialsLoopScheduler.add(baseRoutineBegin(snapshot));
      trialsLoopScheduler.add(baseRoutineEachFrame());
      trialsLoopScheduler.add(baseRoutineEnd(snapshot));
      trialsLoopScheduler.add(fixRoutineBegin(snapshot));
      trialsLoopScheduler.add(fixRoutineEachFrame());
      trialsLoopScheduler.add(fixRoutineEnd(snapshot));
      trialsLoopScheduler.add(targetRoutineBegin(snapshot));
      trialsLoopScheduler.add(targetRoutineEachFrame());
      trialsLoopScheduler.add(targetRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function runsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(runs);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function runsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _space_resp_allKeys;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instructs_txt.setText(instr_list[current_instr]);
    space_resp.keys = undefined;
    space_resp.rt = undefined;
    _space_resp_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(instructs_txt);
    welcomeComponents.push(space_remind);
    welcomeComponents.push(space_resp);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructs_txt* updates
    if (t >= 0.0 && instructs_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructs_txt.tStart = t;  // (not accounting for frame time here)
      instructs_txt.frameNStart = frameN;  // exact frame index
      
      instructs_txt.setAutoDraw(true);
    }

    
    // *space_remind* updates
    if (t >= 0.0 && space_remind.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_remind.tStart = t;  // (not accounting for frame time here)
      space_remind.frameNStart = frameN;  // exact frame index
      
      space_remind.setAutoDraw(true);
    }

    
    // *space_resp* updates
    if (t >= 0.0 && space_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_resp.tStart = t;  // (not accounting for frame time here)
      space_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space_resp.clearEvents(); });
    }

    if (space_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = space_resp.getKeys({keyList: ['space'], waitRelease: false});
      _space_resp_allKeys = _space_resp_allKeys.concat(theseKeys);
      if (_space_resp_allKeys.length > 0) {
        space_resp.keys = _space_resp_allKeys[_space_resp_allKeys.length - 1].name;  // just the last key pressed
        space_resp.rt = _space_resp_allKeys[_space_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(space_resp.corr, level);
    }
    psychoJS.experiment.addData('space_resp.keys', space_resp.keys);
    if (typeof space_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space_resp.rt', space_resp.rt);
        routineTimer.reset();
        }
    
    space_resp.stop();
    // Run 'End Routine' code from instructs_code
    current_instr += 1;
    
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _space_resp_3_allKeys;
var remindComponents;
function remindRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'remind' ---
    t = 0;
    remindClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    space_resp_3.keys = undefined;
    space_resp_3.rt = undefined;
    _space_resp_3_allKeys = [];
    // keep track of which components have finished
    remindComponents = [];
    remindComponents.push(space_resp_3);
    remindComponents.push(space_remind_2);
    remindComponents.push(image);
    
    for (const thisComponent of remindComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function remindRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'remind' ---
    // get current time
    t = remindClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *space_resp_3* updates
    if (t >= 0.0 && space_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_resp_3.tStart = t;  // (not accounting for frame time here)
      space_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space_resp_3.clearEvents(); });
    }

    if (space_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = space_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _space_resp_3_allKeys = _space_resp_3_allKeys.concat(theseKeys);
      if (_space_resp_3_allKeys.length > 0) {
        space_resp_3.keys = _space_resp_3_allKeys[_space_resp_3_allKeys.length - 1].name;  // just the last key pressed
        space_resp_3.rt = _space_resp_3_allKeys[_space_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *space_remind_2* updates
    if (t >= 0.0 && space_remind_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_remind_2.tStart = t;  // (not accounting for frame time here)
      space_remind_2.frameNStart = frameN;  // exact frame index
      
      space_remind_2.setAutoDraw(true);
    }

    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of remindComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function remindRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'remind' ---
    for (const thisComponent of remindComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(space_resp_3.corr, level);
    }
    psychoJS.experiment.addData('space_resp_3.keys', space_resp_3.keys);
    if (typeof space_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space_resp_3.rt', space_resp_3.rt);
        routineTimer.reset();
        }
    
    space_resp_3.stop();
    // the Routine "remind" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _space_resp_4_allKeys;
var final_directComponents;
function final_directRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'final_direct' ---
    t = 0;
    final_directClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    space_resp_4.keys = undefined;
    space_resp_4.rt = undefined;
    _space_resp_4_allKeys = [];
    // keep track of which components have finished
    final_directComponents = [];
    final_directComponents.push(space_resp_4);
    final_directComponents.push(space_remind_3);
    
    for (const thisComponent of final_directComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function final_directRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'final_direct' ---
    // get current time
    t = final_directClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *space_resp_4* updates
    if (t >= 0.0 && space_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_resp_4.tStart = t;  // (not accounting for frame time here)
      space_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space_resp_4.clearEvents(); });
    }

    if (space_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = space_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _space_resp_4_allKeys = _space_resp_4_allKeys.concat(theseKeys);
      if (_space_resp_4_allKeys.length > 0) {
        space_resp_4.keys = _space_resp_4_allKeys[_space_resp_4_allKeys.length - 1].name;  // just the last key pressed
        space_resp_4.rt = _space_resp_4_allKeys[_space_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *space_remind_3* updates
    if (t >= 0.0 && space_remind_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_remind_3.tStart = t;  // (not accounting for frame time here)
      space_remind_3.frameNStart = frameN;  // exact frame index
      
      space_remind_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of final_directComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function final_directRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'final_direct' ---
    for (const thisComponent of final_directComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(space_resp_4.corr, level);
    }
    psychoJS.experiment.addData('space_resp_4.keys', space_resp_4.keys);
    if (typeof space_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space_resp_4.rt', space_resp_4.rt);
        routineTimer.reset();
        }
    
    space_resp_4.stop();
    // the Routine "final_direct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pr_file;
var pr_stim;
var pr_stim_list;
var pr_index;
var pr_this_row;
var pr_position;
var practice_codeComponents;
function practice_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_code' ---
    t = 0;
    practice_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from get_pr_info
    pr_file = `runs/run_practice.csv`
    
    pr_stim = new TrialHandler({
        psychoJS: psychoJS,
        nReps: 1, 
        method: TrialHandler.Method.SEQUENTIAL, 
        extraInfo: expInfo, 
        originPath: undefined, 
        trialList: ((`${stim_dir}/` + pr_file)), 
        seed: undefined, 
        name: 'pr_stim'});
    
    pr_stim_list = pr_stim.trialList;
    pr_index = Array.from({length: 16}, (_, i) => i + 1);
    
    /* use unique seeds to shuffle images within trials */
    pr_index = seededShuffle(pr_index, pid);
    console.log("pr index list is: ", pr_index)
    pr_this_row = "";
    
    for (var i, _pj_c = 0, _pj_a = util.range(pr_index.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        pr_this_row = pr_index[i] - 1;
        console.log("pr_this_row: ", pr_this_row)
        
        // Check if the index is out of bounds
        if(pr_this_row < 0 || pr_this_row >= pr_stim_list.length) {
            console.warn(`Invalid index: ${pr_this_row}. Skipping this row.`);
            continue;
        }
        
        // Safely try to access properties
        let row_data = pr_stim_list[pr_this_row];
        if(!row_data || !row_data["image_path"] || !row_data["base_pair"] || !row_data["test_word"] || !row_data["condition"]) {
            console.warn(`Incomplete or missing data for index: ${pr_this_row}. Skipping this row.`);
            continue;
        }
    
        pr_base_image = row_data["image_path"];
        pr_base_word = row_data["base_pair"];
        pr_target_word = row_data["test_word"];
        pr_target_condition = row_data["condition"];
    
        pr_base_images.push(pr_base_image);
        pr_base_words.push(pr_base_word);
        pr_target_words.push(pr_target_word);
        pr_target_conditions.push(pr_target_condition);
    }
    
    // Run 'Begin Routine' code from counters_2
    pr_position = pr_counter;
    pr_counter += 1;
    // keep track of which components have finished
    practice_codeComponents = [];
    
    for (const thisComponent of practice_codeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_codeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_code' ---
    // get current time
    t = practice_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_codeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_codeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_code' ---
    for (const thisComponent of practice_codeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "practice_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _early_keys_pr_allKeys;
var _on_time_pr_allKeys;
var kb;
var pr_missed_msg;
var pr_baseComponents;
function pr_baseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pr_base' ---
    t = 0;
    pr_baseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    early_keys_pr.keys = undefined;
    early_keys_pr.rt = undefined;
    _early_keys_pr_allKeys = [];
    on_time_pr.keys = undefined;
    on_time_pr.rt = undefined;
    _on_time_pr_allKeys = [];
    pr_image.setImage(pr_base_images[pr_position]);
    pr_word_1.setText(pr_base_words[pr_position]);
    // Run 'Begin Routine' code from key_code_pr
    kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true}); 
    pr_missed_msg = " ";
    // keep track of which components have finished
    pr_baseComponents = [];
    pr_baseComponents.push(early_keys_pr);
    pr_baseComponents.push(on_time_pr);
    pr_baseComponents.push(pr_fixation);
    pr_baseComponents.push(pr_image);
    pr_baseComponents.push(pr_word_1);
    pr_baseComponents.push(pr_remind_2);
    
    for (const thisComponent of pr_baseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var keys;
function pr_baseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pr_base' ---
    // get current time
    t = pr_baseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *early_keys_pr* updates
    if (t >= 0.0 && early_keys_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      early_keys_pr.tStart = t;  // (not accounting for frame time here)
      early_keys_pr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { early_keys_pr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { early_keys_pr.start(); }); // start on screen flip
    }

    frameRemains = 0.0 + base_word_start - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (early_keys_pr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      early_keys_pr.status = PsychoJS.Status.FINISHED;
  }

    if (early_keys_pr.status === PsychoJS.Status.STARTED) {
      let theseKeys = early_keys_pr.getKeys({keyList: ['a', 'l', 'A', 'L'], waitRelease: false});
      _early_keys_pr_allKeys = _early_keys_pr_allKeys.concat(theseKeys);
      if (_early_keys_pr_allKeys.length > 0) {
        early_keys_pr.keys = _early_keys_pr_allKeys.map((key) => key.name);  // storing all keys
        early_keys_pr.rt = _early_keys_pr_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *on_time_pr* updates
    if (t >= base_word_start && on_time_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      on_time_pr.tStart = t;  // (not accounting for frame time here)
      on_time_pr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { on_time_pr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { on_time_pr.start(); }); // start on screen flip
    }

    frameRemains = base_word_start + base_word_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (on_time_pr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      on_time_pr.status = PsychoJS.Status.FINISHED;
  }

    if (on_time_pr.status === PsychoJS.Status.STARTED) {
      let theseKeys = on_time_pr.getKeys({keyList: ['a', 'l', 'A', 'L'], waitRelease: false});
      _on_time_pr_allKeys = _on_time_pr_allKeys.concat(theseKeys);
      if (_on_time_pr_allKeys.length > 0) {
        on_time_pr.keys = _on_time_pr_allKeys.map((key) => key.name);  // storing all keys
        on_time_pr.rt = _on_time_pr_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *pr_fixation* updates
    if (t >= 0.0 && pr_fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pr_fixation.tStart = t;  // (not accounting for frame time here)
      pr_fixation.frameNStart = frameN;  // exact frame index
      
      pr_fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + fixation_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pr_fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pr_fixation.setAutoDraw(false);
    }
    
    // *pr_image* updates
    if (t >= base_image_start && pr_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pr_image.tStart = t;  // (not accounting for frame time here)
      pr_image.frameNStart = frameN;  // exact frame index
      
      pr_image.setAutoDraw(true);
    }

    frameRemains = base_image_start + base_image_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pr_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pr_image.setAutoDraw(false);
    }
    
    // *pr_word_1* updates
    if (t >= base_word_start && pr_word_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pr_word_1.tStart = t;  // (not accounting for frame time here)
      pr_word_1.frameNStart = frameN;  // exact frame index
      
      pr_word_1.setAutoDraw(true);
    }

    frameRemains = base_word_start + base_word_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pr_word_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pr_word_1.setAutoDraw(false);
    }
    // Run 'Each Frame' code from key_code_pr
    keys = kb.getKeys(["a", "l", "A", "L"], {"waitRelease": false});
    if (early_keys_pr.keys) {
        pr_kb_msg = "We noticed that you pressed the keyboard before seeing the words at least once. Please make sure to ONLY give a response for the words!";
    }
    
    if (on_time_pr.keys) {
        pr_key_presses.push(keys);
        // Wait for 0.01 seconds, hogging the CPU for a maximum of 0.2 seconds
        await new Promise(resolve => setTimeout(resolve, 10));
        continueRoutine = false;
    }
    
    
    // *pr_remind_2* updates
    if (t >= base_word_start && pr_remind_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pr_remind_2.tStart = t;  // (not accounting for frame time here)
      pr_remind_2.frameNStart = frameN;  // exact frame index
      
      pr_remind_2.setAutoDraw(true);
    }

    frameRemains = base_word_start + base_word_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pr_remind_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pr_remind_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pr_baseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pr_baseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pr_base' ---
    for (const thisComponent of pr_baseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(early_keys_pr.corr, level);
    }
    psychoJS.experiment.addData('early_keys_pr.keys', early_keys_pr.keys);
    if (typeof early_keys_pr.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('early_keys_pr.rt', early_keys_pr.rt);
        }
    
    early_keys_pr.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(on_time_pr.corr, level);
    }
    psychoJS.experiment.addData('on_time_pr.keys', on_time_pr.keys);
    if (typeof on_time_pr.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('on_time_pr.rt', on_time_pr.rt);
        }
    
    on_time_pr.stop();
    // the Routine "pr_base" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixComponents;
function fixRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fix' ---
    t = 0;
    fixClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixComponents = [];
    fixComponents.push(pr_fixation_2);
    
    for (const thisComponent of fixComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fix' ---
    // get current time
    t = fixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pr_fixation_2* updates
    if (t >= 1 && pr_fixation_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pr_fixation_2.tStart = t;  // (not accounting for frame time here)
      pr_fixation_2.frameNStart = frameN;  // exact frame index
      
      pr_fixation_2.setAutoDraw(true);
    }

    frameRemains = 1 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pr_fixation_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pr_fixation_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fix' ---
    for (const thisComponent of fixComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _pr_target_keys_allKeys;
var pr_targetComponents;
function pr_targetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pr_target' ---
    t = 0;
    pr_targetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    pr_target_keys.keys = undefined;
    pr_target_keys.rt = undefined;
    _pr_target_keys_allKeys = [];
    pr_word_2.setText(pr_target_words[pr_position]);
    // keep track of which components have finished
    pr_targetComponents = [];
    pr_targetComponents.push(pr_target_keys);
    pr_targetComponents.push(pr_remind);
    pr_targetComponents.push(pr_word_2);
    
    for (const thisComponent of pr_targetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pr_targetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pr_target' ---
    // get current time
    t = pr_targetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pr_target_keys* updates
    if (t >= target_word_start && pr_target_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pr_target_keys.tStart = t;  // (not accounting for frame time here)
      pr_target_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pr_target_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pr_target_keys.start(); }); // start on screen flip
    }

    frameRemains = target_word_start + target_word_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pr_target_keys.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pr_target_keys.status = PsychoJS.Status.FINISHED;
  }

    if (pr_target_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = pr_target_keys.getKeys({keyList: ['a', 'l', 'A', 'L'], waitRelease: false});
      _pr_target_keys_allKeys = _pr_target_keys_allKeys.concat(theseKeys);
      if (_pr_target_keys_allKeys.length > 0) {
        pr_target_keys.keys = _pr_target_keys_allKeys[_pr_target_keys_allKeys.length - 1].name;  // just the last key pressed
        pr_target_keys.rt = _pr_target_keys_allKeys[_pr_target_keys_allKeys.length - 1].rt;
      }
    }
    
    // Run 'Each Frame' code from key_code_pr_2
    keys = kb.getKeys(["a", "l", "A", "L"], {"waitRelease": false});
    if (pr_target_keys.keys) {
        pr_key_presses.push(keys);
        // Wait for 0.01 seconds, hogging the CPU for a maximum of 0.2 seconds
        await new Promise(resolve => setTimeout(resolve, 10));
        continueRoutine = false;
    }
    
    
    // *pr_remind* updates
    if (t >= target_word_start && pr_remind.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pr_remind.tStart = t;  // (not accounting for frame time here)
      pr_remind.frameNStart = frameN;  // exact frame index
      
      pr_remind.setAutoDraw(true);
    }

    frameRemains = target_word_start + target_word_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pr_remind.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pr_remind.setAutoDraw(false);
    }
    
    // *pr_word_2* updates
    if (t >= target_word_start && pr_word_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pr_word_2.tStart = t;  // (not accounting for frame time here)
      pr_word_2.frameNStart = frameN;  // exact frame index
      
      pr_word_2.setAutoDraw(true);
    }

    frameRemains = target_word_start + target_word_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pr_word_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pr_word_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pr_targetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var pr_trial_threshold;
function pr_targetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pr_target' ---
    for (const thisComponent of pr_targetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(pr_target_keys.corr, level);
    }
    psychoJS.experiment.addData('pr_target_keys.keys', pr_target_keys.keys);
    if (typeof pr_target_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pr_target_keys.rt', pr_target_keys.rt);
        }
    
    pr_target_keys.stop();
    // Run 'End Routine' code from key_code_pr_2
    pr_trial_threshold = Math.round(n_practice * 2 * 0.85);
    if ((pr_key_presses.length >= pr_trial_threshold)) {
        pr_missed_msg = "Thank you for responding to at least 85% of the words!";
    } else {
        pr_missed_msg = "We noticed that you didn't respond to 15% or more of the words. Please make sure to respond to all the words!";
    }
    
    // the Routine "pr_target" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _to_continue_allKeys;
var pr_earlyComponents;
function pr_earlyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pr_early' ---
    t = 0;
    pr_earlyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    to_continue.keys = undefined;
    to_continue.rt = undefined;
    _to_continue_allKeys = [];
    // keep track of which components have finished
    pr_earlyComponents = [];
    pr_earlyComponents.push(early_remind);
    pr_earlyComponents.push(space_remind2);
    pr_earlyComponents.push(to_continue);
    
    for (const thisComponent of pr_earlyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pr_earlyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pr_early' ---
    // get current time
    t = pr_earlyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *early_remind* updates
    if (t >= 0.0 && early_remind.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      early_remind.tStart = t;  // (not accounting for frame time here)
      early_remind.frameNStart = frameN;  // exact frame index
      
      early_remind.setAutoDraw(true);
    }

    
    if (early_remind.status === PsychoJS.Status.STARTED){ // only update if being drawn
      early_remind.setText(pr_kb_msg, false);
    }
    
    // *space_remind2* updates
    if (t >= 0.0 && space_remind2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_remind2.tStart = t;  // (not accounting for frame time here)
      space_remind2.frameNStart = frameN;  // exact frame index
      
      space_remind2.setAutoDraw(true);
    }

    
    // *to_continue* updates
    if (t >= 0.0 && to_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_continue.tStart = t;  // (not accounting for frame time here)
      to_continue.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { to_continue.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { to_continue.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { to_continue.clearEvents(); });
    }

    if (to_continue.status === PsychoJS.Status.STARTED) {
      let theseKeys = to_continue.getKeys({keyList: ['space'], waitRelease: false});
      _to_continue_allKeys = _to_continue_allKeys.concat(theseKeys);
      if (_to_continue_allKeys.length > 0) {
        to_continue.keys = _to_continue_allKeys[_to_continue_allKeys.length - 1].name;  // just the last key pressed
        to_continue.rt = _to_continue_allKeys[_to_continue_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pr_earlyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pr_earlyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pr_early' ---
    for (const thisComponent of pr_earlyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(to_continue.corr, level);
    }
    psychoJS.experiment.addData('to_continue.keys', to_continue.keys);
    if (typeof to_continue.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('to_continue.rt', to_continue.rt);
        routineTimer.reset();
        }
    
    to_continue.stop();
    // the Routine "pr_early" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _to_continue2_allKeys;
var pr_missedComponents;
function pr_missedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pr_missed' ---
    t = 0;
    pr_missedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    missed_remind.setText(pr_missed_msg);
    to_continue2.keys = undefined;
    to_continue2.rt = undefined;
    _to_continue2_allKeys = [];
    // keep track of which components have finished
    pr_missedComponents = [];
    pr_missedComponents.push(missed_remind);
    pr_missedComponents.push(space_remind3);
    pr_missedComponents.push(to_continue2);
    
    for (const thisComponent of pr_missedComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pr_missedRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pr_missed' ---
    // get current time
    t = pr_missedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *missed_remind* updates
    if (t >= 0.0 && missed_remind.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      missed_remind.tStart = t;  // (not accounting for frame time here)
      missed_remind.frameNStart = frameN;  // exact frame index
      
      missed_remind.setAutoDraw(true);
    }

    
    // *space_remind3* updates
    if (t >= 0.0 && space_remind3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_remind3.tStart = t;  // (not accounting for frame time here)
      space_remind3.frameNStart = frameN;  // exact frame index
      
      space_remind3.setAutoDraw(true);
    }

    
    // *to_continue2* updates
    if (t >= 0.0 && to_continue2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_continue2.tStart = t;  // (not accounting for frame time here)
      to_continue2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { to_continue2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { to_continue2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { to_continue2.clearEvents(); });
    }

    if (to_continue2.status === PsychoJS.Status.STARTED) {
      let theseKeys = to_continue2.getKeys({keyList: ['space'], waitRelease: false});
      _to_continue2_allKeys = _to_continue2_allKeys.concat(theseKeys);
      if (_to_continue2_allKeys.length > 0) {
        to_continue2.keys = _to_continue2_allKeys[_to_continue2_allKeys.length - 1].name;  // just the last key pressed
        to_continue2.rt = _to_continue2_allKeys[_to_continue2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pr_missedComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pr_missedRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pr_missed' ---
    for (const thisComponent of pr_missedComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(to_continue2.corr, level);
    }
    psychoJS.experiment.addData('to_continue2.keys', to_continue2.keys);
    if (typeof to_continue2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('to_continue2.rt', to_continue2.rt);
        routineTimer.reset();
        }
    
    to_continue2.stop();
    // the Routine "pr_missed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _space_resp_2_allKeys;
var kb_msg;
var add_instructsComponents;
function add_instructsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'add_instructs' ---
    t = 0;
    add_instructsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    space_resp_2.keys = undefined;
    space_resp_2.rt = undefined;
    _space_resp_2_allKeys = [];
    instructions_txt_2.setText(instr_list_2[current_instr_2]);
    // Run 'Begin Routine' code from welc_code_2
    kb_msg = " ";
    // keep track of which components have finished
    add_instructsComponents = [];
    add_instructsComponents.push(space_resp_2);
    add_instructsComponents.push(instructions_txt_2);
    add_instructsComponents.push(space_bar_reminder_2);
    
    for (const thisComponent of add_instructsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function add_instructsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'add_instructs' ---
    // get current time
    t = add_instructsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *space_resp_2* updates
    if (t >= 0.0 && space_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_resp_2.tStart = t;  // (not accounting for frame time here)
      space_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { space_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { space_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { space_resp_2.clearEvents(); });
    }

    if (space_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = space_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _space_resp_2_allKeys = _space_resp_2_allKeys.concat(theseKeys);
      if (_space_resp_2_allKeys.length > 0) {
        space_resp_2.keys = _space_resp_2_allKeys[_space_resp_2_allKeys.length - 1].name;  // just the last key pressed
        space_resp_2.rt = _space_resp_2_allKeys[_space_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instructions_txt_2* updates
    if (t >= 0.0 && instructions_txt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_txt_2.tStart = t;  // (not accounting for frame time here)
      instructions_txt_2.frameNStart = frameN;  // exact frame index
      
      instructions_txt_2.setAutoDraw(true);
    }

    
    // *space_bar_reminder_2* updates
    if (t >= 0.0 && space_bar_reminder_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_bar_reminder_2.tStart = t;  // (not accounting for frame time here)
      space_bar_reminder_2.frameNStart = frameN;  // exact frame index
      
      space_bar_reminder_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of add_instructsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function add_instructsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'add_instructs' ---
    for (const thisComponent of add_instructsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(space_resp_2.corr, level);
    }
    psychoJS.experiment.addData('space_resp_2.keys', space_resp_2.keys);
    if (typeof space_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('space_resp_2.rt', space_resp_2.rt);
        routineTimer.reset();
        }
    
    space_resp_2.stop();
    // Run 'End Routine' code from welc_code_2
    current_instr_2 += 1;
    
    // the Routine "add_instructs" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var run_file;
var run_stim;
var stim_list;
var this_row;
var select_routineComponents;
function select_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'select_routine' ---
    t = 0;
    select_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    run_file = run_files[1];
    console.log("run file is: ", run_file)
    
    run_stim = new TrialHandler({
        psychoJS: psychoJS,
        nReps: 1, 
        method: TrialHandler.Method.SEQUENTIAL, 
        extraInfo: expInfo, 
        originPath: undefined, 
        trialList: ((`${stim_dir}/` + run_file)), 
        seed: undefined, 
        name: 'run_stim'});
    
    stim_list = run_stim.trialList;
    
    this_row = "";
    for (var i, _pj_c = 0, _pj_a = util.range(stim_list.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        this_row = i;
        // this_row = trial_index[i] - 1;
        console.log(this_row);
        
        // Check if the index is out of bounds
        if(this_row < 0 || this_row >= stim_list.length) {
            console.warn(`Invalid index: ${this_row}. Skipping this row.`);
            continue;
        }
    
        // Safely try to access properties
        let row_data = stim_list[this_row];
        if(!row_data || 
           !row_data["image_path"] || 
           !row_data["word_1"] || 
           !row_data["word_2"] || 
           !row_data["condition"] || 
           !row_data["resp_1"] || 
           !row_data["resp_2"]) {
            console.warn(`Incomplete or missing data for index: ${this_row}. Skipping this row.`);
            continue;
        }
    
        base_image = row_data["image_path"];
        console.log(base_image);
        base_word = row_data["word_1"];
        target_word = row_data["word_2"];
        target_condition = row_data["condition"];
        correct_answer_1 = row_data["resp_1"];
        correct_answer_2 = row_data["resp_2"];
        
        base_images.push("stims/runs/" + base_image);
        base_words.push(base_word);
        target_words.push(target_word);
        target_conditions.push(target_condition);
        correct_answers_1.push(correct_answer_1);
        correct_answers_2.push(correct_answer_2);
    }
    // keep track of which components have finished
    select_routineComponents = [];
    
    for (const thisComponent of select_routineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function select_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'select_routine' ---
    // get current time
    t = select_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of select_routineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function select_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'select_routine' ---
    for (const thisComponent of select_routineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "select_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var missed_msg;
var key_presses;
var trial_within_run;
var run_percent;
var run_codeComponents;
function run_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'run_code' ---
    t = 0;
    run_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from get_run_info
    // increment counter to reflect new run 
    kb_msg = "Thank you for not making key presses before the words!";
    missed_msg = "Thank you for responding to at least 85% of the words!";
    
    /* Create an empty list to store the trial-by-trial key presses */
    key_presses = [];
    
    trial_within_run = 0;
    run_counter += 1;
    run_percent = Math.round((run_counter / n_runs) * 100);
    if (run_counter < n_runs) {
        end_run_msg = "You have now finished " + run_percent.toString() + "% of the task! Please continue to press the 'A' and 'L' keys as quickly as you can when you see the words.";
    } else {
        end_run_msg = "You have now finished the task!";
        image_opacity = 0;
    }
    // keep track of which components have finished
    run_codeComponents = [];
    
    for (const thisComponent of run_codeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function run_codeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'run_code' ---
    // get current time
    t = run_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of run_codeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function run_codeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'run_code' ---
    for (const thisComponent of run_codeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "run_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_position;
var trial_codeComponents;
function trial_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_code' ---
    t = 0;
    trial_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from counters
    trial_within_run += 1;
    trial_position = trial_within_experiment;
    trial_within_experiment += 1;
    
    psychoJS.experiment.addData("base_word", base_words[trial_position]);
    psychoJS.experiment.addData("base_image", base_images[trial_position]);
    psychoJS.experiment.addData("target_word", target_words[trial_position]);
    psychoJS.experiment.addData("target_condition", target_conditions[trial_position]);
    psychoJS.experiment.addData("correct_answer_1", correct_answers_1[trial_position]);
    psychoJS.experiment.addData("correct_answer_2", correct_answers_2[trial_position]);
    psychoJS.experiment.addData("run_num", run_counter);
    psychoJS.experiment.addData("run_file", run_file);
    psychoJS.experiment.addData("trial_within_run", trial_within_run);
    psychoJS.experiment.addData("trial_within_experiment", trial_within_experiment);
        
    console.log("Trial is #", trial_within_run, " in run");
    console.log("Trial is #", trial_within_experiment, " overall");
    console.log("Image for trial is ", base_images[trial_position]);
    // keep track of which components have finished
    trial_codeComponents = [];
    
    for (const thisComponent of trial_codeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_codeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_code' ---
    // get current time
    t = trial_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_codeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_codeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_code' ---
    for (const thisComponent of trial_codeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "trial_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _early_keys_allKeys;
var _on_time_allKeys;
var baseComponents;
function baseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'base' ---
    t = 0;
    baseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    early_keys.keys = undefined;
    early_keys.rt = undefined;
    _early_keys_allKeys = [];
    on_time.keys = undefined;
    on_time.rt = undefined;
    _on_time_allKeys = [];
    // Run 'Begin Routine' code from key_code
    kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true}); 
    
    console.log(trial_position);
    console.log(base_images[trial_position]);
    base_pair_image.setImage(base_images[trial_position]);
    base_pair_word.setText(base_words[trial_position]);
    // keep track of which components have finished
    baseComponents = [];
    baseComponents.push(early_keys);
    baseComponents.push(on_time);
    baseComponents.push(base_pair_image);
    baseComponents.push(base_pair_word);
    baseComponents.push(fixation_cross);
    
    for (const thisComponent of baseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function baseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'base' ---
    // get current time
    t = baseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *early_keys* updates
    if (t >= 0.0 && early_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      early_keys.tStart = t;  // (not accounting for frame time here)
      early_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { early_keys.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { early_keys.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { early_keys.clearEvents(); });
    }

    frameRemains = 0.0 + base_word_start - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (early_keys.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      early_keys.status = PsychoJS.Status.FINISHED;
  }

    if (early_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = early_keys.getKeys({keyList: ['a', 'l', 'A', 'L'], waitRelease: false});
      _early_keys_allKeys = _early_keys_allKeys.concat(theseKeys);
      if (_early_keys_allKeys.length > 0) {
        early_keys.keys = _early_keys_allKeys.map((key) => key.name);  // storing all keys
        early_keys.rt = _early_keys_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *on_time* updates
    if (t >= base_word_start && on_time.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      on_time.tStart = t;  // (not accounting for frame time here)
      on_time.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { on_time.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { on_time.start(); }); // start on screen flip
    }

    frameRemains = base_word_start + base_word_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (on_time.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      on_time.status = PsychoJS.Status.FINISHED;
  }

    if (on_time.status === PsychoJS.Status.STARTED) {
      let theseKeys = on_time.getKeys({keyList: ['a', 'l', 'A', 'L'], waitRelease: false});
      _on_time_allKeys = _on_time_allKeys.concat(theseKeys);
      if (_on_time_allKeys.length > 0) {
        on_time.keys = _on_time_allKeys.map((key) => key.name);  // storing all keys
        on_time.rt = _on_time_allKeys.map((key) => key.rt);
      }
    }
    
    // Run 'Each Frame' code from key_code
    keys = kb.getKeys(["a", "l", "A", "L"], {"waitRelease": false});
    if (early_keys.keys) {
        kb_msg = "We noticed that you pressed the keyboard before seeing the words at least once. Please make sure to ONLY give a response for the words!";
    }
    
    if (on_time.keys) {
        key_presses.push(keys);
        // Wait for 0.01 seconds, hogging the CPU for a maximum of 0.2 seconds
        await new Promise(resolve => setTimeout(resolve, 10));
        continueRoutine = false;
    }
    
    
    // *base_pair_image* updates
    if (t >= base_image_start && base_pair_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      base_pair_image.tStart = t;  // (not accounting for frame time here)
      base_pair_image.frameNStart = frameN;  // exact frame index
      
      base_pair_image.setAutoDraw(true);
    }

    frameRemains = base_image_start + base_image_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (base_pair_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      base_pair_image.setAutoDraw(false);
    }
    
    // *base_pair_word* updates
    if (t >= base_word_start && base_pair_word.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      base_pair_word.tStart = t;  // (not accounting for frame time here)
      base_pair_word.frameNStart = frameN;  // exact frame index
      
      base_pair_word.setAutoDraw(true);
    }

    frameRemains = base_word_start + base_word_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (base_pair_word.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      base_pair_word.setAutoDraw(false);
    }
    
    // *fixation_cross* updates
    if (t >= 0 && fixation_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_cross.tStart = t;  // (not accounting for frame time here)
      fixation_cross.frameNStart = frameN;  // exact frame index
      
      fixation_cross.setAutoDraw(true);
    }

    frameRemains = 0 + fixation_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_cross.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of baseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function baseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'base' ---
    for (const thisComponent of baseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(early_keys.corr, level);
    }
    psychoJS.experiment.addData('early_keys.keys', early_keys.keys);
    if (typeof early_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('early_keys.rt', early_keys.rt);
        }
    
    early_keys.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(on_time.corr, level);
    }
    psychoJS.experiment.addData('on_time.keys', on_time.keys);
    if (typeof on_time.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('on_time.rt', on_time.rt);
        }
    
    on_time.stop();
    // the Routine "base" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _on_time_2_allKeys;
var targetComponents;
function targetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'target' ---
    t = 0;
    targetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    on_time_2.keys = undefined;
    on_time_2.rt = undefined;
    _on_time_2_allKeys = [];
    target_word_random_2.setText(target_words[trial_position]);
    // keep track of which components have finished
    targetComponents = [];
    targetComponents.push(on_time_2);
    targetComponents.push(target_word_random_2);
    
    for (const thisComponent of targetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function targetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'target' ---
    // get current time
    t = targetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *on_time_2* updates
    if (t >= target_word_start && on_time_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      on_time_2.tStart = t;  // (not accounting for frame time here)
      on_time_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { on_time_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { on_time_2.start(); }); // start on screen flip
    }

    frameRemains = target_word_start + target_word_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (on_time_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      on_time_2.status = PsychoJS.Status.FINISHED;
  }

    if (on_time_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = on_time_2.getKeys({keyList: ['a', 'l', 'A', 'L'], waitRelease: false});
      _on_time_2_allKeys = _on_time_2_allKeys.concat(theseKeys);
      if (_on_time_2_allKeys.length > 0) {
        on_time_2.keys = _on_time_2_allKeys.map((key) => key.name);  // storing all keys
        on_time_2.rt = _on_time_2_allKeys.map((key) => key.rt);
      }
    }
    
    // Run 'Each Frame' code from key_code_2
    keys = kb.getKeys(["a", "l", "A", "L"], {"waitRelease": false});
    if (on_time_2.keys) {
        key_presses.push(keys);
        // Wait for 0.01 seconds, hogging the CPU for a maximum of 0.2 seconds
        await new Promise(resolve => setTimeout(resolve, 10));
        continueRoutine = false;
    }
    
    
    // *target_word_random_2* updates
    if (t >= target_word_start && target_word_random_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_word_random_2.tStart = t;  // (not accounting for frame time here)
      target_word_random_2.frameNStart = frameN;  // exact frame index
      
      target_word_random_2.setAutoDraw(true);
    }

    frameRemains = target_word_start + target_word_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (target_word_random_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target_word_random_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of targetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var trial_threshold;
function targetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'target' ---
    for (const thisComponent of targetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(on_time_2.corr, level);
    }
    psychoJS.experiment.addData('on_time_2.keys', on_time_2.keys);
    if (typeof on_time_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('on_time_2.rt', on_time_2.rt);
        }
    
    on_time_2.stop();
    // Run 'End Routine' code from key_code_2
    console.log("total key presses: ", key_presses.length);
    trial_threshold = Math.round(n_trials * 2 * 0.85);
    console.log("trial threshold is ", trial_threshold);
    if ((key_presses.length >= trial_threshold)) {
        missed_msg = "Thank you for responding to at least 85% of the words!";
    } else {
        missed_msg = "We noticed that you didn't respond to 15% or more of the words. Please make sure to respond to all the words!";
    }
    
    // the Routine "target" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _to_continue_3_allKeys;
var earlyComponents;
function earlyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'early' ---
    t = 0;
    earlyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    to_continue_3.keys = undefined;
    to_continue_3.rt = undefined;
    _to_continue_3_allKeys = [];
    // keep track of which components have finished
    earlyComponents = [];
    earlyComponents.push(early_txt);
    earlyComponents.push(space_remind2_2);
    earlyComponents.push(to_continue_3);
    
    for (const thisComponent of earlyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function earlyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'early' ---
    // get current time
    t = earlyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *early_txt* updates
    if (t >= 0.0 && early_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      early_txt.tStart = t;  // (not accounting for frame time here)
      early_txt.frameNStart = frameN;  // exact frame index
      
      early_txt.setAutoDraw(true);
    }

    
    if (early_txt.status === PsychoJS.Status.STARTED){ // only update if being drawn
      early_txt.setText(kb_msg, false);
    }
    
    // *space_remind2_2* updates
    if (t >= 0.0 && space_remind2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_remind2_2.tStart = t;  // (not accounting for frame time here)
      space_remind2_2.frameNStart = frameN;  // exact frame index
      
      space_remind2_2.setAutoDraw(true);
    }

    
    // *to_continue_3* updates
    if (t >= 0.0 && to_continue_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_continue_3.tStart = t;  // (not accounting for frame time here)
      to_continue_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { to_continue_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { to_continue_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { to_continue_3.clearEvents(); });
    }

    if (to_continue_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = to_continue_3.getKeys({keyList: ['space'], waitRelease: false});
      _to_continue_3_allKeys = _to_continue_3_allKeys.concat(theseKeys);
      if (_to_continue_3_allKeys.length > 0) {
        to_continue_3.keys = _to_continue_3_allKeys[_to_continue_3_allKeys.length - 1].name;  // just the last key pressed
        to_continue_3.rt = _to_continue_3_allKeys[_to_continue_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of earlyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function earlyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'early' ---
    for (const thisComponent of earlyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(to_continue_3.corr, level);
    }
    psychoJS.experiment.addData('to_continue_3.keys', to_continue_3.keys);
    if (typeof to_continue_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('to_continue_3.rt', to_continue_3.rt);
        routineTimer.reset();
        }
    
    to_continue_3.stop();
    // the Routine "early" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _to_cont_allKeys;
var missedComponents;
function missedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'missed' ---
    t = 0;
    missedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    missed_txt.setText(missed_msg);
    to_cont.keys = undefined;
    to_cont.rt = undefined;
    _to_cont_allKeys = [];
    // keep track of which components have finished
    missedComponents = [];
    missedComponents.push(missed_txt);
    missedComponents.push(space_msg);
    missedComponents.push(to_cont);
    
    for (const thisComponent of missedComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function missedRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'missed' ---
    // get current time
    t = missedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *missed_txt* updates
    if (t >= 0.0 && missed_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      missed_txt.tStart = t;  // (not accounting for frame time here)
      missed_txt.frameNStart = frameN;  // exact frame index
      
      missed_txt.setAutoDraw(true);
    }

    
    // *space_msg* updates
    if (t >= 0.0 && space_msg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_msg.tStart = t;  // (not accounting for frame time here)
      space_msg.frameNStart = frameN;  // exact frame index
      
      space_msg.setAutoDraw(true);
    }

    
    // *to_cont* updates
    if (t >= 0.0 && to_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      to_cont.tStart = t;  // (not accounting for frame time here)
      to_cont.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { to_cont.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { to_cont.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { to_cont.clearEvents(); });
    }

    if (to_cont.status === PsychoJS.Status.STARTED) {
      let theseKeys = to_cont.getKeys({keyList: ['space'], waitRelease: false});
      _to_cont_allKeys = _to_cont_allKeys.concat(theseKeys);
      if (_to_cont_allKeys.length > 0) {
        to_cont.keys = _to_cont_allKeys[_to_cont_allKeys.length - 1].name;  // just the last key pressed
        to_cont.rt = _to_cont_allKeys[_to_cont_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of missedComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function missedRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'missed' ---
    for (const thisComponent of missedComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(to_cont.corr, level);
    }
    psychoJS.experiment.addData('to_cont.keys', to_cont.keys);
    if (typeof to_cont.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('to_cont.rt', to_cont.rt);
        routineTimer.reset();
        }
    
    to_cont.stop();
    // the Routine "missed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _continue_resp_allKeys;
var end_runComponents;
function end_runRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_run' ---
    t = 0;
    end_runClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_run_txt.setText(end_run_msg);
    continue_resp.keys = undefined;
    continue_resp.rt = undefined;
    _continue_resp_allKeys = [];
    // keep track of which components have finished
    end_runComponents = [];
    end_runComponents.push(end_run_txt);
    end_runComponents.push(continue_resp);
    end_runComponents.push(space_bar_reminder_3);
    
    for (const thisComponent of end_runComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_runRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_run' ---
    // get current time
    t = end_runClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_run_txt* updates
    if (t >= 0.0 && end_run_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_run_txt.tStart = t;  // (not accounting for frame time here)
      end_run_txt.frameNStart = frameN;  // exact frame index
      
      end_run_txt.setAutoDraw(true);
    }

    
    // *continue_resp* updates
    if (t >= 0.0 && continue_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_resp.tStart = t;  // (not accounting for frame time here)
      continue_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { continue_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { continue_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { continue_resp.clearEvents(); });
    }

    if (continue_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = continue_resp.getKeys({keyList: ['space'], waitRelease: false});
      _continue_resp_allKeys = _continue_resp_allKeys.concat(theseKeys);
      if (_continue_resp_allKeys.length > 0) {
        continue_resp.keys = _continue_resp_allKeys[_continue_resp_allKeys.length - 1].name;  // just the last key pressed
        continue_resp.rt = _continue_resp_allKeys[_continue_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *space_bar_reminder_3* updates
    if (t >= 0.0 && space_bar_reminder_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_bar_reminder_3.tStart = t;  // (not accounting for frame time here)
      space_bar_reminder_3.frameNStart = frameN;  // exact frame index
      
      space_bar_reminder_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_runComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var targ_key_presses;
function end_runRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_run' ---
    for (const thisComponent of end_runComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(continue_resp.corr, level);
    }
    psychoJS.experiment.addData('continue_resp.keys', continue_resp.keys);
    if (typeof continue_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('continue_resp.rt', continue_resp.rt);
        routineTimer.reset();
        }
    
    continue_resp.stop();
    // Run 'End Routine' code from kp_reset
    targ_key_presses = [];
    
    // the Routine "end_run" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _submit_task_allKeys;
var completion_msgComponents;
function completion_msgRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'completion_msg' ---
    t = 0;
    completion_msgClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    submit_task.keys = undefined;
    submit_task.rt = undefined;
    _submit_task_allKeys = [];
    // keep track of which components have finished
    completion_msgComponents = [];
    completion_msgComponents.push(final_screen_3);
    completion_msgComponents.push(submit_task);
    
    for (const thisComponent of completion_msgComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function completion_msgRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'completion_msg' ---
    // get current time
    t = completion_msgClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *final_screen_3* updates
    if (t >= 0.0 && final_screen_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      final_screen_3.tStart = t;  // (not accounting for frame time here)
      final_screen_3.frameNStart = frameN;  // exact frame index
      
      final_screen_3.setAutoDraw(true);
    }

    
    // *submit_task* updates
    if (t >= 0.0 && submit_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_task.tStart = t;  // (not accounting for frame time here)
      submit_task.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { submit_task.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { submit_task.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { submit_task.clearEvents(); });
    }

    if (submit_task.status === PsychoJS.Status.STARTED) {
      let theseKeys = submit_task.getKeys({keyList: ['space'], waitRelease: false});
      _submit_task_allKeys = _submit_task_allKeys.concat(theseKeys);
      if (_submit_task_allKeys.length > 0) {
        submit_task.keys = _submit_task_allKeys[_submit_task_allKeys.length - 1].name;  // just the last key pressed
        submit_task.rt = _submit_task_allKeys[_submit_task_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of completion_msgComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function completion_msgRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'completion_msg' ---
    for (const thisComponent of completion_msgComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(submit_task.corr, level);
    }
    psychoJS.experiment.addData('submit_task.keys', submit_task.keys);
    if (typeof submit_task.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('submit_task.rt', submit_task.rt);
        routineTimer.reset();
        }
    
    submit_task.stop();
    // the Routine "completion_msg" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
