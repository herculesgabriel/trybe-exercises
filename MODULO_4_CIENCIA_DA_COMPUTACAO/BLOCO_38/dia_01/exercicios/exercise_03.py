from linked_list import LinkedList


def remove_linked_list_duplicates(linked_list):
    new_linked_list = LinkedList()

    while linked_list:
        current_node = linked_list.remove_first()

        if new_linked_list.index_of(current_node.value) == -1:
            new_linked_list.insert_last(current_node.value)

    return new_linked_list
