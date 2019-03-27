module.exports = {
  login: {
    username:'Username',
    error_username: 'Please enter the username',
    password:'Password',
    error_password: 'Please enter the password',
    button:'Login',
    failed: 'Failed: Invalid Username or Password'
  },
  header: {
    title:'Superdock Drone Automatic Airport',
    status: 'Communication Status',
    logout:'Logout',
    air:'Drone',
    depot:'Depot',
    normal:'Normal',
    shutdown: 'Powered Off',
    net_error: 'Network Error',
    never_online: 'Not Connected',
    abnormal:'Abnormal'
  },
  sidemenu: {
    plan:'Plans',
    depot:'Depots',
    air:'Drone'
  },
  plan:{
    view:{
      title:'View Plan',
      run:'Run Plan',
      history:'Plan axecution history',
      run_time:'Execution time',
      raw_data:'Raw data',
      auto_run:'Automatic processing',
      logs:'Fly logs',
      sever_logs:'Sever logs',
      start_run:'The plan starts run!',

    },
    edit:{
      add:'Create',
      alter:'Modify',
      create:'Create',
      save_plan:'Save',
      delete_plan:'Delete',
      name_inp:'Enter the name of plan',
      desc_inp:'Enter the description of plan',
      first_time_inp:'Select the first run time',
      depot_inp:'Select to take off and land',
      air_inp:'Select the drone',
      cycle_inp:'Select the run cycle',
      cycle_type_1:'Manual',
      cycle_type_2:'Once',
      cycle_type_3:'EveryHour',
      cycle_type_4:'EveryDay',
      cycle_type_5:'EveryWeek',
      cycle_type_6:'EveryMonth',
      please_name:'Please enter the name of plan!',
      please_desc:'Please enter the description of plan!',
      please_air:'Please select the drone!',
      please_depot:'Please select to take off and land!',
      please_cycle:'Please select the run cycle!',
      please_file:'Please upload the waypoint file!',
      delete_tips:'This action will delete the plan, will it continue?'
    },
    plan_name:'Name',
    plan_desc:'Description',
    plan_desc_no:'No description',
    plan_air:'Flying drone',
    plan_depot:'Depot',
    plan_cycle:'Cycle',
    plan_mapfile:'Waypoint file',
    plan_first_time:'First run time',
    weather:'Weather',
    fly_check:'Pre-flight inspection',
    plan_createtime:'Creation time',
    fly_check_desc:'We need to check the condition of the equipment to ensure that the plan can be performed safely.',
    start_now:'Start Now'
  },
  air:{
    mode_auto:'Automatic',
    mode_guide:'Boot',
    mode_fixed:'Fixed Point',
    mode_back:'Return',
    mode_land:'Landing',
    mode_:'--Mode',
    flight_time:'Fly {t}',
    flight_speed:'Speed {s}',
    flight_height:'Height {h}',
    battery_remain:'Elec {num}',
    battery_voltage:'Vol {num}',
    gps_satellites:'{num} Stars',
    pitch_angle:'PTZ angle',
    screenshot:'Screenshot',
    recording:'Recording',
    air_control:'Drone control',
    air_hover:'Hover',
    air_return:'Return',
    air_takeoff:'Take off',
    air_runplan:'Start task',
    air_up:'Rise {num} m',
    air_down:'Decrease {num} m',
    air_landpoint:'Landing',
    air_land:'Landing directly',
    air_emergency_stop:'Emergency stop',
    air_emergency_stop_tips:'Paddle blade stop, to be very careful',
  },
  depot:{
    monitor:'Realtime monitor',
    weather:'Outdoor weather',
    weather_feel:'Weather {feel}',
    wind_speed:'Wind {s}',
    humidity:'Hum {num}',
    temperature:'Tem {num}',
    charts:'<{a} light rain, {a}-{b} moderate rain, >{b} heavy rain',
    charts_label_now:'Now',
    charts_label_30m:'30 minutes',
    charts_label_60m:'60 minutes',
    depot_info:"Information",
    depot_id:'Id',
    view_old_monitor:'Historical monitor',
    view_fly_plan:'Fly plan',
    battery:'{i} Battery',
    cycle:'Cycles',
    maintain:'Maintain',
    debug:'Debug',
    putin:'Put in',
    pickout:'Remove',
    start_charge:'S-charge',
    stop_charge:'E-charge',
    motor_run:'Motor movement',
    emergency_stop:'Stop',
    open_door:'Open door',
    close_door:'Close door',
    air_fixed:'Fixed Drone',
    air_release:'Release Drone',
    air_bat_putin:'Install-Bat',
    air_bat_pickout:'Remove-Bat',
    air_reset:'Reset',
    platform_rise:'Platform Rise',
    platform_bottom:'Platform Bottom',
    platform_level:'Platform Leveling',
    status_normal:'Normal',
    status_abnormal:'AbNormal'
  },
  common:{
    air:'Drone',
    depot:'Depot',
    cancel:'Cancel',
    comfirm:'Confirm',
    view:'View',
    download:'Download',
    upload:'Upload',
    re_upload:'Re-upload',
    back:'Cancel & back',
    data_none:'No relevant data yet',
    debug_tips:'The commands are for developers only',
    send:'Send',
    clear:'Clear',
    fly_yes:'Can take off',
    fly_no:'Can\'t take off',
    control:'Control',
    advanced_control:'Advance Control',
    status:'Statu',
    air_status:'UAV',
    depot_status:'Depot',
    not_operational: 'Abnormal communication status, unable to opreate.',
    none:'None',
    logs:'Logs',
    no_video:'No video source found, please try again later~',
    system_tips:'System',
    operate_pending: 'Pending...',
    operate_success:'Successful!',
    operate_error:'Failed！',
    plan_ready:'The plan is ready, is it run immediately?'
  },
  weather:{
    clear_day:'Sunny',
    clear_night:'Sunny',
    partly_cloudy:'Partly cloudy',
    cloudy:'Cloudy',
    rain:'Rain',
    snow:'Snow',
    wind:'Wind',
    haze:'Haze'
  }
}
