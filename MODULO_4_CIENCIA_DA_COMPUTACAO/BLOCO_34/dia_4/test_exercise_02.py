import pytest
from exercise_02 import get_phone_number

ERRORS = {
    "TOO_LONG_ARGUMENT": "the argument must less than or equal to 30 long",
    "NO_ARGUMENT": "you must provide one argument",
    "INVALID_CHARACTERS": "invalid entry. Only A-Z, 0, 1 and - are accepted",
}


def test_exercise_01_returns_correct_list():
    assert get_phone_number("MY-MISERABLE-JOB") == "69-647372253-562"
    assert get_phone_number("1-HOME-SWEET-HOME") == "1-4663-79338-4663"


def test_exercise_01_raises_error_when_passing_too_long_argument():
    argument = "the brown quick fox jumps over the lazy dog"

    with pytest.raises(TypeError, match=ERRORS["TOO_LONG_ARGUMENT"]):
        get_phone_number(argument)


def test_exercise_01_raises_error_when_passing_no_arguments():
    with pytest.raises(TypeError, match=ERRORS["NO_ARGUMENT"]):
        get_phone_number()


def test_exercise_01_raises_error_when_passing_invalid_characters():
    with pytest.raises(TypeError, match=ERRORS["INVALID_CHARACTERS"]):
        get_phone_number("&")
