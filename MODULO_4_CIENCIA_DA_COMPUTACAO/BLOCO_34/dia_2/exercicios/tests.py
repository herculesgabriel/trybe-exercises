from contextlib import redirect_stdout
from io import StringIO

import stairs_name


def test_print_stairs_name():
    stub_output = StringIO()
    expected_output = "HERCULES\nHERCULE\nHERCUL\nHERCU\nHERC\nHER\nHE\nH\n"

    with redirect_stdout(stub_output):
        stairs_name.print_stairs_name("Hercules")

        assert stub_output.getvalue() == expected_output


# run tests
test_print_stairs_name()
