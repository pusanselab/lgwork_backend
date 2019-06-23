switch(process.env.NODE_ENV){
    case 'test':
        // test
        global.config = {
            isTest: true,
            isLogging: false, // morgan logger
        }
        break;
    default:
        // release
        global.config = {
            isTest: false,
            isLogging: true, // morgan logger
        }
}