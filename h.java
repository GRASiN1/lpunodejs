import java.util.*;
class Prg{
    public static void main(String args[]){
        Scanner  sc = new Scanner(System.in);
        String s = sc.next();
        int f = s.charAt(0);
        int v = Integer.parseInt(s);
        int l = v%10;
        System.out.println(f-l);
    }
}