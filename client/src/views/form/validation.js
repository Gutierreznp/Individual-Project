export default function validate (input) {
    const error = {};

    // if(!input.countryId) {
    //     error.countryId = 'You must choose a country for this activity';
    // }

    if(input.countryId.length !== 3) {
        error.countryId = '*You must choose a country for this activity';
    }

    if(!input.name) {
        error.name = '*The activity must have a name';
    }

    // if(!input.difficulty) {
    //     error.difficulty = 'You must add a difficulty';
    // }

    if(input.difficulty < 1 || input.difficulty > 5) {
        error.difficulty = '*You must add a difficulty';
    }

    // if(!input.season) {
    //     error.season = 'You must add a season';
    // }

    if(input.season !== 'Summer' && input.season !== 'Winter' && input.season !== 'Fall' && input.season !== 'Spring') {
        error.season = '*You must add a season';
    }

    return error;
}