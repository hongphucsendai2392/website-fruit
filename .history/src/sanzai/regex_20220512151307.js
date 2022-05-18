3
4
5
6
const utf8Convert3 =>(string s)
{
    Regex regex = new Regex("\\p{IsCombiningDiacriticalMarks}+");
    string temp = s.Normalize(NormalizationForm.FormD);
    return regex.Replace(temp, String.Empty).Replace('\u0111', 'd').Replace('\u0110', 'D');
}