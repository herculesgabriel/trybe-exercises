def filter_approved_students(students_list):
    approved_students_list = [
        student[0] for student in students_list if int(student[1]) >= 6
    ]

    return approved_students_list


def parse_students_list(students_list):
    parsed_lines = []

    lines = students_list.split("\n")

    for line in lines:
        name, score = line.split()
        parsed_lines.append((name, score))

    return parsed_lines


def get_approved_students_list():
    try:
        file = open("students.txt", mode="r")
    except OSError:
        print("Arquivo não existe!")
    else:
        content = file.read()
        parsed_students_list = parse_students_list(content)
        approved_students_list = filter_approved_students(parsed_students_list)
    finally:
        file.close()
        return approved_students_list or []


def save_approved_students_list(students_list):
    file = open("aprroved_students.txt", mode="w")

    parsed_students_list = [f"{student}\n" for student in students_list]

    file.writelines(parsed_students_list)
    file.close()


approved_students_list = get_approved_students_list()
save_approved_students_list(approved_students_list)
