export default function validate (input) {
    const error = {};

    if(!input.countryId) {
        error.countryId = 'You must choose a country for this activity';
    }

    if(input.countryId.length !== 3) {
        error.countryId = 'The country code must be a 3-letter code';
    }

    if(!input.name) {
        error.name = 'The activity must have a name';
    }

    if(!input.difficulty) {
        error.difficulty = 'You must add a difficulty';
    }

    if(input.difficulty.length < 1 || input.difficulty.length > 5) {
        error.difficulty = 'Difficulty must be greater than 0 and less than 6';
    }

    if(!input.season) {
        error.season = 'You must add a season';
    }

    if(input.season !== 'Summer' && input.season !== 'Winter' && input.season !== 'Fall' && input.season !== 'Spring') {
        error.season = 'Not valid season';
    }

    return error;
}