namespace LeetCode
{
    class LC1638
    {
        public static void Main(string[] args)
        {
            Solution s = new Solution();
            Console.WriteLine(s.CountSubstrings("ab", "bb"));
        }
    }

    class Solution
    {
        /**
         * comparo cada substring de s con cada substring de t (del mismo tamanio)
         * llamo a un metodo que devuelva true or false dependiendo de si hay 1 o menos diferencias o no
         * sumo si true, paso si false
         */
        public int CountSubstrings(string s, string t)
        {
            int counter = 0;
            //la substr debe ser de tamanio i + 1
            for (int i = 0; i < s.Length; i++)
            {
                List<string> subS = SubstringsWithSizeN(s, i + 1);
                List<string> subT = SubstringsWithSizeN(t, i + 1);

                foreach (string sstr in subS)
                {
                    foreach (string tstr in subT)
                    {
                        counter += OneOrLessDiff(sstr, tstr) ? 1 : 0;
                    }
                }
            }

            return counter;
        }

        private bool OneOrLessDiff(string sub1, string sub2)
        {
            int dif = 0;
            for (int i = 0; i < sub1.Length; i++)
            {
                if (sub1[i] != sub2[i])
                    dif++;
                if (dif > 1)
                    return false;
            }

            if (dif == 0)
                return false;
            return true;
        }

        private List<String> SubstringsWithSizeN(string s, int n)
        {
            List<String> substrings = new List<string>();

            for (int i = 0; i <= s.Length - n; i++)
            {
                substrings.Add(s.Substring(i,n));
            }

            return substrings;
        }
    }
}