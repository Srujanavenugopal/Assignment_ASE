import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class shuffleArray {
    public static void main(String[] args) {
        Integer[] array = {1, 2, 3, 4, 5, 6, 7};
        List<Integer> list = new ArrayList<>();

        // Convert the array to a list
        Collections.addAll(list, array);

        // Shuffle the list
        Collections.shuffle(list);

        // Convert the list back to an array
        list.toArray(array);

        for (int value : array) {
            System.out.print(value + " ");
        }
    }
}