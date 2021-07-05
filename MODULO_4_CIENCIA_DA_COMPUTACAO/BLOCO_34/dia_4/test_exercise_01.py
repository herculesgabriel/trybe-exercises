import pytest
from exercise_01 import get_fizz_buzz_list

STRING_CONCAT_ERROR = 'can only concatenate str'
MISSING_ARG_ERROR = "missing 1 required positional argument: 'list_length'"
ZERO_ARGUMENT_ERROR = "argument must be a integer greater than 0"


def test_exercise_01_returns_fizz_buzz_list():
    received = get_fizz_buzz_list(15)

    assert received.index("Fizz") == 2
    assert received.index("Buzz") == 4
    assert received.index("FizzBuzz") == 14


def test_exercise_01_raises_error_if_no_param_is_passed():
    with pytest.raises(TypeError, match=MISSING_ARG_ERROR):
        get_fizz_buzz_list()


def test_exercise_01_raises_error_if_string_is_passed():
    with pytest.raises(TypeError, match=STRING_CONCAT_ERROR):
        get_fizz_buzz_list("5")


def test_exercise_01_raises_error_if_zero_is_passed():
    with pytest.raises(TypeError, match=ZERO_ARGUMENT_ERROR):
        get_fizz_buzz_list(0)
