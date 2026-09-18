window.ARCHIVE = {
  meta: {
    title: "Palmitessa family history",
    subject: "Poaolo Dominic Palmitessa IV (also Paolo / Dom)",
    dob: "29 July 1992 (used for record matching; no civil birth certificate was opened)",
    researchDate: "1 September 2026",
    scope: "Public genealogy only. Living people besides Dom are named only where obituaries or similar published sources already name them. Current addresses, phones, emails, and SSNs are omitted."
  },

  people: {
    "paolo-domenico": {
      id: "paolo-domenico",
      name: "Paolo Domenico “Paul” Palmitessa",
      aka: ["Paul Palmitessa", "Paolo Dominic Palmitessa"],
      years: "1879–1962",
      born: "18 May 1879",
      died: "1 March 1962",
      place: "St. Paul / Mendota Heights, Minnesota",
      burial: "Resurrection Catholic Cemetery, Mendota Heights, Dakota County, Minnesota",
      status: "documented",
      line: "minnesota",
      role: "Immigrant generation",
      summary: "Named Paolo Dominic Palmitessa in daughter Frances’s obituary. Occupation: Roma Grocery on Seven Corners, St. Paul. Find A Grave memorial 228720444.",
      notes: [
        "Best onomastic match for generation “I” of the IV styling, but no record opened labels him “I.”",
        "His own Italian birthplace is the leading hypothesis (Monopoli), not a civil-register fact."
      ],
      relations: [
        { type: "Spouse", id: "teresa-ippolito" },
        { type: "Child", id: "vito-a" },
        { type: "Child", id: "joseph-frank" },
        { type: "Child", id: "mary-ann" },
        { type: "Child", id: "frances" },
        { type: "Child", id: "nina" },
        { type: "Child", id: "lorraine" }
      ],
      sources: ["fg-paolo", "obit-frances"]
    },
    "teresa-ippolito": {
      id: "teresa-ippolito",
      name: "Theresa / Teresa Firenza Ippolito Palmitessa",
      aka: ["Theresa F. Palmitessa", "Teresa Firenza Ippolito"],
      years: "1889–1976",
      born: "18 August 1889 (Find A Grave). A compiled SSDI extract lists 10 August 1889.",
      died: "3 February 1976 (Find A Grave); SSDI extract: February 1976, last residence ZIP 55106 (St. Paul area).",
      place: "St. Paul / Mendota Heights, Minnesota",
      burial: "Resurrection Catholic Cemetery, Mendota Heights, Minnesota",
      status: "documented",
      line: "minnesota",
      role: "Immigrant generation",
      summary: "Wife of Paolo Domenico. Named Teresa Firenza (Ippolito) Palmitessa in Frances’s obituary. Find A Grave memorial 228720463.",
      relations: [
        { type: "Spouse", id: "paolo-domenico" },
        { type: "Child", id: "vito-a" },
        { type: "Child", id: "joseph-frank" },
        { type: "Child", id: "mary-ann" },
        { type: "Child", id: "frances" },
        { type: "Child", id: "nina" },
        { type: "Child", id: "lorraine" }
      ],
      sources: ["fg-theresa", "obit-frances"]
    },
    "vito-a": {
      id: "vito-a",
      name: "Vito A. Palmitessa",
      years: "1909–1998",
      born: "23 August 1909 (compiled SSDI). Birthplace (Italy vs U.S.) not in sources opened.",
      died: "5 August 1998, ZIP 55106",
      status: "documented",
      line: "minnesota",
      role: "Child of the immigrants",
      summary: "Named as predeceased brother in Joseph’s (2007) and Frances’s (2014) obituaries. Wife Carmen is named in Frances’s obituary.",
      relations: [
        { type: "Parents", id: "paolo-domenico" },
        { type: "Parents", id: "teresa-ippolito" },
        { type: "Spouse", id: "carmen" }
      ],
      sources: ["obit-joseph", "obit-frances"]
    },
    carmen: {
      id: "carmen",
      name: "Carmen Palmitessa",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Named in Frances’s 2014 obituary as Vito’s wife",
      summary: "Named only as published in Frances Christine Palmitessa Sportelli’s obituary.",
      relations: [{ type: "Spouse", id: "vito-a" }],
      sources: ["obit-frances"]
    },
    "joseph-frank": {
      id: "joseph-frank",
      name: "Joseph Frank Palmitessa",
      aka: ["Joseph F. Palmitessa"],
      years: "1914–2007",
      born: "August 1914, Monopoli, Italy. Obituary: 4 August 1914. Find A Grave 75823010: 2 August 1914 (one-record discrepancy).",
      died: "13 September 2007",
      burial: "Lakeside Cemetery, Randolph, Minnesota",
      status: "documented",
      line: "minnesota",
      role: "Only opened source that names a comune of origin for this line",
      summary: "Son of Paolo Domenico and Teresa Ippolito. Born in Monopoli. Married Ida Marie Held on 21 November 1940. Lived in St. Paul; moved to Grundy Center, Iowa, in 1961; moved to Indiana in 1966; later North Carolina, then back to Minnesota.",
      notes: ["In the paternal line between Paolo Domenico and Jerry. Not named Paolo."],
      relations: [
        { type: "Parents", id: "paolo-domenico" },
        { type: "Parents", id: "teresa-ippolito" },
        { type: "Spouse", id: "ida-held" },
        { type: "Child", id: "rita" },
        { type: "Child", id: "jerry" },
        { type: "Child", id: "sandi" },
        { type: "Child", id: "john" },
        { type: "Child", id: "joe" },
        { type: "Child", id: "mary-nord" },
        { type: "Child", id: "joann" }
      ],
      sources: ["fg-joseph", "obit-joseph", "obit-ida"]
    },
    "ida-held": {
      id: "ida-held",
      name: "Ida Marie Held Palmitessa",
      years: "1915–2015",
      born: "23 May 1915, St. Paul. Parents: Carl Held and Ida Mahr.",
      died: "27 December 2015, Northfield, Minnesota",
      burial: "Lakeside Cemetery, Randolph, Minnesota",
      status: "documented",
      line: "minnesota",
      role: "Married into the Palmitessa line, 21 Nov 1940",
      summary: "Historical residences of this deceased couple: West 7th Street and Winslow Avenue, St. Paul; Grundy Center, Iowa (from 1961); Indiana (from 1966); North Carolina; returned to St. Paul; later Cannon Falls / Northfield.",
      relations: [
        { type: "Spouse", id: "joseph-frank" },
        { type: "Parent", id: "carl-held" },
        { type: "Parent", id: "ida-mahr" }
      ],
      sources: ["fg-ida", "obit-ida"]
    },
    "carl-held": {
      id: "carl-held",
      name: "Carl Held",
      years: "",
      status: "documented",
      line: "minnesota",
      role: "Father of Ida Marie Held",
      summary: "Named as Ida’s father on her Find A Grave memorial / funeral-home text.",
      relations: [{ type: "Child", id: "ida-held" }],
      sources: ["fg-ida"]
    },
    "ida-mahr": {
      id: "ida-mahr",
      name: "Ida Mahr",
      years: "",
      status: "documented",
      line: "minnesota",
      role: "Mother of Ida Marie Held",
      summary: "Named as Ida’s mother on her Find A Grave memorial / funeral-home text.",
      relations: [{ type: "Child", id: "ida-held" }],
      sources: ["fg-ida"]
    },
    "mary-ann": {
      id: "mary-ann",
      name: "Mary Ann Palmitessa Bifulk",
      years: "1916–2007",
      born: "3 November 1916",
      died: "27 December 2007, St. Paul",
      status: "documented",
      line: "minnesota",
      role: "Child of the immigrants",
      summary: "Married Archie Bifulk.",
      relations: [
        { type: "Parents", id: "paolo-domenico" },
        { type: "Spouse", id: "archie-bifulk" }
      ],
      sources: ["obit-mary-ann"]
    },
    "archie-bifulk": {
      id: "archie-bifulk",
      name: "Archie Bifulk",
      years: "",
      status: "documented",
      line: "minnesota",
      role: "Husband of Mary Ann",
      summary: "Named as Mary Ann Palmitessa’s husband in published obituaries.",
      relations: [{ type: "Spouse", id: "mary-ann" }],
      sources: ["obit-mary-ann"]
    },
    frances: {
      id: "frances",
      name: "Frances Christine Palmitessa Sportelli",
      years: "1918–2014",
      born: "12 November 1918, Ramsey County / St. Paul, Minnesota. Fourth of six children.",
      died: "24 July 2014",
      burial: "Fort Snelling National Cemetery",
      status: "documented",
      line: "minnesota",
      role: "Child of the immigrants",
      summary: "Worked at her father’s Roma Grocery on Seven Corners in St. Paul. Married Victor Peter Sportelli (1918–1991). Her obituary is a key source for the immigrant couple’s names.",
      relations: [
        { type: "Parents", id: "paolo-domenico" },
        { type: "Spouse", id: "victor-sportelli" }
      ],
      sources: ["fg-frances", "obit-frances"]
    },
    "victor-sportelli": {
      id: "victor-sportelli",
      name: "Victor Peter Sportelli",
      years: "1918–1991",
      status: "documented",
      line: "minnesota",
      role: "Husband of Frances",
      summary: "Find A Grave memorial 3504479.",
      relations: [{ type: "Spouse", id: "frances" }],
      sources: ["fg-victor"]
    },
    nina: {
      id: "nina",
      name: "Nina Victoria Palmitessa Grazzini",
      years: "1921–2008",
      born: "6 September 1921",
      died: "20 August 2008",
      burial: "Resurrection Catholic Cemetery",
      status: "documented",
      line: "minnesota",
      role: "Child of the immigrants",
      summary: "Married Albert Grazzini. Find A Grave memorial 175203827.",
      relations: [
        { type: "Parents", id: "paolo-domenico" },
        { type: "Spouse", id: "albert-grazzini" }
      ],
      sources: ["fg-nina", "obit-nina"]
    },
    "albert-grazzini": {
      id: "albert-grazzini",
      name: "Albert Grazzini",
      years: "",
      status: "documented",
      line: "minnesota",
      role: "Husband of Nina",
      summary: "Named in Nina’s obituaries.",
      relations: [{ type: "Spouse", id: "nina" }],
      sources: ["obit-nina"]
    },
    lorraine: {
      id: "lorraine",
      name: "Lorraine Palmitessa Schuweiler",
      years: "1924–2018",
      born: "2 July 1924",
      died: "10 April 2018",
      burial: "Fort Snelling National Cemetery",
      status: "documented",
      line: "minnesota",
      role: "Child of the immigrants",
      summary: "Husband Bernard Schuweiler predeceased Frances (2014). Find A Grave memorial 221645051.",
      relations: [
        { type: "Parents", id: "paolo-domenico" },
        { type: "Spouse", id: "bernard-schuweiler" }
      ],
      sources: ["fg-lorraine"]
    },
    "bernard-schuweiler": {
      id: "bernard-schuweiler",
      name: "Bernard Schuweiler",
      years: "",
      died: "Predeceased Frances (2014)",
      status: "documented",
      line: "minnesota",
      role: "Husband of Lorraine",
      summary: "Named as predeceased in Frances’s 2014 obituary.",
      relations: [{ type: "Spouse", id: "lorraine" }],
      sources: ["obit-frances"]
    },
    rita: {
      id: "rita",
      name: "Rita Palmitessa Dixon",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Child of Joseph and Ida",
      summary: "Married Dallas Dixon, 26 March 1966, Grundy Center, Iowa. Daughters Trisia and Dawn named in Dallas’s 2015 obituary. Waterloo, Iowa as of 2015.",
      relations: [
        { type: "Parents", id: "joseph-frank" },
        { type: "Spouse", id: "dallas-dixon" },
        { type: "Child", id: "trisia" },
        { type: "Child", id: "dawn" }
      ],
      sources: ["obit-ida", "obit-dallas"]
    },
    "dallas-dixon": {
      id: "dallas-dixon",
      name: "Dallas Dixon",
      years: "d. 2015",
      status: "documented",
      line: "minnesota",
      role: "Husband of Rita",
      summary: "Married Rita Palmitessa 26 March 1966, Grundy Center, Iowa. 2015 obituary names daughters Trisia and Dawn.",
      relations: [{ type: "Spouse", id: "rita" }],
      sources: ["obit-dallas"]
    },
    trisia: {
      id: "trisia",
      name: "Trisia",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Named granddaughter in Dallas Dixon 2015 and Joseph 2007 obituaries",
      summary: "Published given name only.",
      relations: [{ type: "Parent", id: "rita" }],
      sources: ["obit-dallas", "obit-joseph"]
    },
    dawn: {
      id: "dawn",
      name: "Dawn",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Named granddaughter in Dallas Dixon 2015 and Joseph 2007 obituaries",
      summary: "Published given name only.",
      relations: [{ type: "Parent", id: "rita" }],
      sources: ["obit-dallas", "obit-joseph"]
    },
    jerry: {
      id: "jerry",
      name: "Jerry Palmitessa",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Paternal grandfather of Dom (family account); son of Joseph and Ida",
      summary: "Wife Jan; of Tennessee as of 2015. Legal given name not published as Paolo/Poaolo in sources opened. Family account (13 September 2026): father of Poaolo Dominic Palmitessa (b. 1970) with Susie Shez; paternal grandfather of Dom.",
      relations: [
        { type: "Parents", id: "joseph-frank" },
        { type: "Spouse (published 2015)", id: "jan" },
        { type: "Child’s mother (family account)", id: "susie-shez" },
        { type: "Child (family account)", id: "poaolo-father" }
      ],
      sources: ["obit-ida", "obit-joseph", "family-2026"]
    },
    jan: {
      id: "jan",
      name: "Jan Palmitessa",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Named as Jerry’s wife in 2015",
      summary: "Published given name only.",
      relations: [{ type: "Spouse", id: "jerry" }],
      sources: ["obit-ida"]
    },
    sandi: {
      id: "sandi",
      name: "Sandi Palmitessa Hostetler",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Child of Joseph and Ida",
      summary: "Married Neal Roland Hostetler Jr.; of Webster, Minnesota. Ties this family to the Plymouth, Indiana, Hostetlers.",
      relations: [
        { type: "Parents", id: "joseph-frank" },
        { type: "Spouse", id: "neal-jr" }
      ],
      sources: ["obit-ida", "obit-neal-hostetler"]
    },
    "neal-jr": {
      id: "neal-jr",
      name: "Neal Roland Hostetler Jr.",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Husband of Sandi",
      summary: "Named in Joseph/Ida obituaries. Hostetler family of Plymouth, Marshall County, Indiana.",
      relations: [{ type: "Spouse", id: "sandi" }],
      sources: ["obit-ida"]
    },
    john: {
      id: "john",
      name: "John Palmitessa",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Child of Joseph and Ida",
      summary: "Wife Sue Ann (Hostetler) Palmitessa; of Cannon Falls, Minnesota. Sue Ann is a daughter of Neal R. Hostetler (1926–2025) of Plymouth, Indiana. Every Hostetler obituary opened shows this marriage; it does not obviously match Angela Rudd or Susie Shez.",
      relations: [
        { type: "Parents", id: "joseph-frank" },
        { type: "Spouse", id: "sue-ann" }
      ],
      sources: ["obit-ida", "obit-neal-hostetler"]
    },
    "sue-ann": {
      id: "sue-ann",
      name: "Sue Ann (Hostetler) Palmitessa",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Wife of John; daughter of Neal R. Hostetler of Plymouth",
      summary: "Published in Hostetler obituaries. Of Cannon Falls, Minnesota.",
      relations: [
        { type: "Spouse", id: "john" },
        { type: "Parent", id: "neal-r-hostetler" }
      ],
      sources: ["obit-neal-hostetler"]
    },
    "neal-r-hostetler": {
      id: "neal-r-hostetler",
      name: "Neal R. Hostetler",
      years: "1926–2025",
      place: "Plymouth, Indiana",
      status: "documented",
      line: "minnesota",
      role: "Plymouth Hostetler patriarch; father of Sue Ann",
      summary: "Obituaries document Palmitessa in-laws in Plymouth, Marshall County. That is a documented social tie, not by itself proof of which of Joseph’s sons is Dom’s father.",
      relations: [{ type: "Child", id: "sue-ann" }],
      sources: ["obit-neal-hostetler"]
    },
    joe: {
      id: "joe",
      name: "Joseph / Joe Palmitessa",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Child of Joseph and Ida",
      summary: "Wife Sher (2007 obituary) / Debra (2015 obituary); of St. Paul. One of three sons who could, in hypothesis, be Dom’s Palmitessa father.",
      relations: [
        { type: "Parents", id: "joseph-frank" },
        { type: "Spouse", id: "sher" },
        { type: "Spouse", id: "debra" }
      ],
      sources: ["obit-joseph", "obit-ida"]
    },
    sher: {
      id: "sher",
      name: "Sher Palmitessa",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Named as Joe’s wife in Joseph’s 2007 obituary",
      summary: "Published given name only. Debra is named in the 2015 obituary.",
      relations: [{ type: "Spouse", id: "joe" }],
      sources: ["obit-joseph"]
    },
    debra: {
      id: "debra",
      name: "Debra Palmitessa",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Named as Joe’s wife in Ida’s 2015 obituary",
      summary: "Published given name only.",
      relations: [{ type: "Spouse", id: "joe" }],
      sources: ["obit-ida"]
    },
    "mary-nord": {
      id: "mary-nord",
      name: "Mary Palmitessa-Nord",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Child of Joseph and Ida",
      summary: "Husband Chris; of Stacy, Minnesota (2015).",
      relations: [
        { type: "Parents", id: "joseph-frank" },
        { type: "Spouse", id: "chris" }
      ],
      sources: ["obit-ida"]
    },
    chris: {
      id: "chris",
      name: "Chris Palmitessa-Nord",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Husband of Mary",
      summary: "Published in Ida’s 2015 obituary.",
      relations: [{ type: "Spouse", id: "mary-nord" }],
      sources: ["obit-ida"]
    },
    joann: {
      id: "joann",
      name: "Joann M. Palmitessa",
      years: "1942–2004",
      born: "11 December 1942",
      died: "12 June 2004",
      status: "documented",
      line: "minnesota",
      role: "Child of Joseph and Ida",
      summary: "Unmarried in her obituary; survived by the siblings above.",
      relations: [{ type: "Parents", id: "joseph-frank" }],
      sources: ["obit-joann"]
    },
    electra: {
      id: "electra",
      name: "Electra Sue (Palmitessa) Fasching",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Granddaughter of Joseph F. Palmitessa",
      summary: "Independently a granddaughter of Joseph F. (Joseph 2007 list includes Electra). Arthur James Fasching’s obituary names her as his wife and, as Plymouth in-laws, mother-in-law Susie Shez and siblings/in-laws Angelique Weidner, Poaolo Palmitessa, Nicola Palmitessa, and Zach Shez. Family account places Susie Shez as Dom’s paternal grandmother, so this is the paternal household, not a rival nuclear family.",
      relations: [
        { type: "Spouse", id: "arthur-fasching" },
        { type: "Parent", id: "susie-shez" }
      ],
      sources: ["obit-joseph", "obit-fasching"]
    },
    "arthur-fasching": {
      id: "arthur-fasching",
      name: "Arthur James Fasching",
      years: "",
      status: "documented",
      line: "minnesota",
      role: "Husband of Electra Sue Palmitessa",
      summary: "Las Vegas Cremations obituary. With the family account, the Fasching/Shez names are the paternal side and the Rudd names are the maternal side of the same family.",
      relations: [{ type: "Spouse", id: "electra" }],
      sources: ["obit-fasching"]
    },
    "susie-shez": {
      id: "susie-shez",
      name: "Georgia Sue (Hollett) Shez",
      aka: ["Susie Shez"],
      years: "",
      status: "living",
      line: "minnesota",
      role: "Paternal grandmother of Dom (family account)",
      summary: "Georgia Sue (Hollett) Shez, daughter of Scott Hollett of Plymouth. Named in the Fasching obituary. Family account (13 September 2026): mother of Poaolo Dominic Palmitessa (b. 1970) with Jerry Palmitessa; paternal grandmother of Dom.",
      relations: [
        { type: "Parent", id: "scott-hollett" },
        { type: "Child’s father (family account)", id: "jerry" },
        { type: "Child (family account)", id: "poaolo-father" },
        { type: "Child", id: "electra" }
      ],
      sources: ["obit-fasching", "obit-hollett", "family-2026"]
    },
    "scott-hollett": {
      id: "scott-hollett",
      name: "Scott J. Hollett Sr.",
      years: "d. 2003",
      place: "Plymouth, Indiana",
      status: "documented",
      line: "minnesota",
      role: "Preceded in death by great-granddaughter Victoria Marie Palmitessa",
      summary: "Palmer Funeral Homes obituary.",
      relations: [
        { type: "Child", id: "susie-shez" },
        { type: "Descendant", id: "victoria-marie" }
      ],
      sources: ["obit-hollett"]
    },
    "victoria-marie": {
      id: "victoria-marie",
      name: "Victoria Marie Palmitessa",
      years: "",
      status: "documented",
      line: "minnesota",
      role: "Great-granddaughter of Scott J. Hollett Sr.",
      summary: "Named in Scott J. Hollett Sr.’s obituary (d. 2003) as a predeceased great-granddaughter.",
      relations: [{ type: "Ancestor", id: "scott-hollett" }],
      sources: ["obit-hollett"]
    },
    "angelique-weidner": {
      id: "angelique-weidner",
      name: "Angelique Weidner",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Named in the Fasching obituary among Electra’s siblings/in-laws",
      summary: "Published name only. Plymouth connection.",
      relations: [],
      sources: ["obit-fasching"]
    },
    nicola: {
      id: "nicola",
      name: "Nicola Palmitessa",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Named in the Fasching obituary among Electra’s siblings/in-laws",
      summary: "Published name only.",
      relations: [],
      sources: ["obit-fasching"]
    },
    "zach-shez": {
      id: "zach-shez",
      name: "Zach Shez",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Named in the Fasching obituary among Electra’s siblings/in-laws",
      summary: "Published name only.",
      relations: [],
      sources: ["obit-fasching"]
    },
    "david-m": {
      id: "david-m",
      name: "David M. Palmitessa",
      years: "1970–2002",
      status: "documented",
      line: "minnesota",
      role: "Deceased grandson of Joseph F.",
      summary: "Find A Grave 75823051; born 8 February 1970, died 25 January 2002; Lakeside Cemetery, Randolph. Named among deceased grandsons in Joseph’s 2007 obituary, with Brian. The subject states this is not his father.",
      relations: [],
      sources: ["fg-david", "obit-joseph"]
    },
    brian: {
      id: "brian",
      name: "Brian Palmitessa",
      years: "",
      died: "Predeceased Joseph F. (2007)",
      status: "documented",
      line: "minnesota",
      role: "Deceased grandson of Joseph F.",
      summary: "Named with David among deceased grandsons in Joseph’s 2007 obituary.",
      relations: [],
      sources: ["obit-joseph"]
    },
    "poaolo-father": {
      id: "poaolo-father",
      name: "Poaolo Dominic Palmitessa",
      aka: ["Paolo"],
      years: "b. 1970",
      born: "1970 (family account). No civil birth certificate was opened for this brief.",
      status: "family",
      line: "minnesota",
      role: "Father of Poaolo Dominic Palmitessa IV",
      summary: "Family account from the subject, 13 September 2026: born 1970 to Jerry Palmitessa and Susie Shez; married to Amy, mother of Poaolo Dominic Palmitessa IV. Not labeled “III” in any public record opened. A plausible published match is the grandson Paolo in Joseph F.’s 2007 obituary — not a caption. David M. Palmitessa (1970–2002) is a different person; the subject says that is not his father.",
      notes: [
        "Public records opened for this archive do not print this man’s full name as Dom’s father.",
        "Jerry’s published wife in 2015 is Jan; the Susie Shez relationship is family account."
      ],
      relations: [
        { type: "Father (family account)", id: "jerry" },
        { type: "Mother (family account)", id: "susie-shez" },
        { type: "Spouse (family account)", id: "amy-burch" },
        { type: "Child", id: "poaolo-iv" }
      ],
      sources: ["family-2026", "obit-joseph"]
    },
    "poaolo-iv": {
      id: "poaolo-iv",
      name: "Poaolo Dominic Palmitessa IV",
      aka: ["Paolo", "Dom", "Poaolo Palmitessa"],
      years: "b. 1992",
      born: "Reported 29 July 1992 (used for record matching; no civil birth certificate was opened)",
      place: "Marshall County / Plymouth, Indiana (published footprints)",
      status: "documented",
      line: "minnesota",
      role: "Subject of this archive",
      summary: "Named as a grandson of Ned W. Rudd, D.V.M. (2006) and, by the same household, of Mary Lee (Williams) Rudd (2020). Plymouth High School swimmer, sophomore, 2008–09 IHSAA Warsaw sectional — consistent with a July 1992 birth. Quinn Li Palmitessa is named as wife of Dominic Palmitessa of Warsaw in the 2022 Donald E. Luther obituary (her father).",
      notes: [
        "Family account: father is Poaolo Dominic Palmitessa (b. 1970), son of Jerry Palmitessa and Susie Shez; mother is Amy of the Rudd household. Angela Rudd is a maternal aunt.",
        "Pedigree with that account: Paolo Domenico → Joseph F. → Jerry → Poaolo Dominic (b. 1970) → Dom. Four Palmitessa generations in the U.S. after Italy, still not four men all named Paolo.",
        "The Fasching/Shez names are the paternal side; the Rudd names are the maternal side."
      ],
      relations: [
        { type: "Father (family account)", id: "poaolo-father" },
        { type: "Mother (family account)", id: "amy-burch" },
        { type: "Paternal grandfather (family account)", id: "jerry" },
        { type: "Paternal grandmother (family account)", id: "susie-shez" },
        { type: "Maternal grandfather", id: "ned-rudd" },
        { type: "Maternal grandmother", id: "mary-lee-rudd" },
        { type: "Maternal aunt", id: "angela-rudd" },
        { type: "Spouse (published 2022)", id: "quinn-li" }
      ],
      sources: ["obit-ned-rudd", "obit-mary-lee", "ihsaa", "obit-luther", "family-2026"]
    },
    "ned-rudd": {
      id: "ned-rudd",
      name: "Ned W. Rudd, D.V.M.",
      years: "1932–2006",
      born: "18 December 1932",
      died: "10 November 2006",
      place: "Plymouth, Indiana",
      status: "documented",
      line: "rudd",
      role: "Maternal grandfather of the subject",
      summary: "Johnson-Danielson obituary is the first opened source that uses the IV styling and the unusual given-name spelling Poaolo. Children: Angela R. Rudd; Amy R. (Roger / later Mindy) Burch; Ned W. Rudd Jr.; Jason B. Rudd.",
      relations: [
        { type: "Spouse", id: "mary-lee-rudd" },
        { type: "Child", id: "angela-rudd" },
        { type: "Child", id: "amy-burch" },
        { type: "Child", id: "ned-jr" },
        { type: "Child", id: "jason-rudd" },
        { type: "Grandson", id: "poaolo-iv" }
      ],
      sources: ["obit-ned-rudd"]
    },
    "mary-lee-rudd": {
      id: "mary-lee-rudd",
      name: "Mary Lee (Williams) Rudd",
      years: "1934–2020",
      born: "20 March 1934",
      died: "2 December 2020",
      place: "Plymouth, Indiana",
      status: "documented",
      line: "rudd",
      role: "Maternal grandmother of the subject",
      summary: "Lifetime Plymouth, Indiana, family. In 2020 Angela is listed as “Angela Rudd, South Bend.”",
      relations: [
        { type: "Spouse", id: "ned-rudd" },
        { type: "Grandson", id: "poaolo-iv" }
      ],
      sources: ["obit-mary-lee"]
    },
    "angela-rudd": {
      id: "angela-rudd",
      name: "Angela R. Rudd",
      years: "",
      status: "living",
      line: "rudd",
      role: "Maternal aunt of Dom (family account)",
      summary: "In 2006 listed without a spouse; in 2020 “Angela Rudd, South Bend.” An earlier reading of the Rudd obituaries treated her as the likely mother because she was listed without a spouse. Family account (13 September 2026): she is a maternal aunt; Amy is the mother.",
      relations: [
        { type: "Parents", id: "ned-rudd" },
        { type: "Nephew (family account)", id: "poaolo-iv" }
      ],
      sources: ["obit-ned-rudd", "obit-mary-lee", "family-2026"]
    },
    "amy-burch": {
      id: "amy-burch",
      name: "Amy R. Rudd",
      aka: ["Amy R. Burch", "Amy (Mindy) Burch"],
      years: "",
      status: "family",
      line: "rudd",
      role: "Mother of Dom (family account)",
      summary: "Named Amy R. (Roger) Burch in Ned Rudd’s 2006 obituary and Amy (Mindy) Burch, Englewood, Ohio, in Mary Lee Rudd’s 2020 obituary. Family account (13 September 2026): she is Dom’s mother and was married to Poaolo Dominic Palmitessa (b. 1970). The obituaries never caption “mother of Poaolo.” The 2006 grandchild list names Poaolo Dominic Palmitessa IV separately from Eric, Callie, Devon and Quintin Burch.",
      relations: [
        { type: "Parents", id: "ned-rudd" },
        { type: "Spouse (family account)", id: "poaolo-father" },
        { type: "Child (family account)", id: "poaolo-iv" }
      ],
      sources: ["obit-ned-rudd", "obit-mary-lee", "family-2026"]
    },
    "ned-jr": {
      id: "ned-jr",
      name: "Ned W. Rudd Jr.",
      years: "",
      status: "living",
      line: "rudd",
      role: "Child of Ned and Mary Lee Rudd",
      summary: "Named in the Rudd obituaries.",
      relations: [{ type: "Parents", id: "ned-rudd" }],
      sources: ["obit-ned-rudd"]
    },
    "jason-rudd": {
      id: "jason-rudd",
      name: "Jason B. Rudd",
      years: "",
      status: "living",
      line: "rudd",
      role: "Child of Ned and Mary Lee Rudd",
      summary: "Named in the Rudd obituaries.",
      relations: [{ type: "Parents", id: "ned-rudd" }],
      sources: ["obit-ned-rudd"]
    },
    "quinn-li": {
      id: "quinn-li",
      name: "Quinn Li Palmitessa",
      years: "",
      status: "living",
      line: "minnesota",
      role: "Named as wife of Dominic Palmitessa of Warsaw, 2022",
      summary: "Named in the 2022 Donald E. Luther obituary (her father).",
      relations: [
        { type: "Spouse", id: "poaolo-iv" },
        { type: "Parent", id: "donald-luther" }
      ],
      sources: ["obit-luther"]
    },
    "donald-luther": {
      id: "donald-luther",
      name: "Donald E. Luther",
      years: "d. 2022",
      status: "documented",
      line: "minnesota",
      role: "Father of Quinn Li Palmitessa",
      summary: "Johnson-Danielson obituary, 11 December 2022, names Quinn Li Palmitessa as wife of Dominic Palmitessa of Warsaw.",
      relations: [{ type: "Child", id: "quinn-li" }],
      sources: ["obit-luther"]
    },
    "rev-paul": {
      id: "rev-paul",
      name: "Rev. Paul Palmitessa",
      years: "b. 18 January 1931",
      status: "documented",
      line: "unplaced",
      role: "Not placed on Dom’s pedigree",
      summary: "Served in the Archdiocese of St. Paul and Minneapolis (ordination 1956). Parentage was not established in sources opened for this brief; Frances’s “six children” list does not include him.",
      relations: [],
      sources: []
    },
    "domenico-scranton": {
      id: "domenico-scranton",
      name: "Domenico “Domnick” Palmitessa",
      years: "1879/1880–1968",
      born: "Find A Grave: 14 March 1880. Compiled SSDI: Dominic Palmitessa, 21 February 1879. Use both dates; they disagree.",
      died: "Find A Grave: 2 March 1968. SSDI extract: 1 March 1968, last residence Scranton 18504.",
      burial: "Cathedral Cemetery, Scranton",
      status: "documented",
      line: "scranton",
      role: "Scranton immigrant — link to Dom unproven",
      summary: "Same surname and similar immigrant birth years to Minnesota Paolo Domenico, but different wife, different burial, different death year. Treat as a separate family until a shared Italian parent is shown. Italian town for this cluster: not found.",
      relations: [
        { type: "Spouse", id: "victoria-ungaro" },
        { type: "Child", id: "frank-scranton" },
        { type: "Child", id: "cosimo" },
        { type: "Child", id: "mary-provini" },
        { type: "Child", id: "nellie-zito" },
        { type: "Child", id: "james-phillip" },
        { type: "Child", id: "paul-paluch" }
      ],
      sources: ["fg-domenico-scranton"]
    },
    "victoria-ungaro": {
      id: "victoria-ungaro",
      name: "Victoria Ungaro Palmitessa",
      years: "1886–1957",
      born: "10 June 1886",
      died: "20 August 1957",
      burial: "Cathedral Cemetery, Scranton",
      status: "documented",
      line: "scranton",
      role: "Wife of Domenico of Scranton",
      summary: "Find A Grave 236323581.",
      relations: [{ type: "Spouse", id: "domenico-scranton" }],
      sources: ["fg-victoria-ungaro"]
    },
    "frank-scranton": {
      id: "frank-scranton",
      name: "Francis “Frank” Palmitessa",
      years: "1906–1994",
      born: "20 November 1906",
      died: "31 December 1994",
      status: "documented",
      line: "scranton",
      role: "Child of Domenico and Victoria",
      summary: "Find A Grave 255227480.",
      relations: [{ type: "Parents", id: "domenico-scranton" }],
      sources: ["fg-frank-scranton"]
    },
    cosimo: {
      id: "cosimo",
      name: "Cosimo Palmitessa",
      years: "1912–1916",
      born: "8 March 1912",
      died: "23 March 1916",
      status: "documented",
      line: "scranton",
      role: "Child of Domenico and Victoria",
      summary: "Find A Grave 117598213.",
      relations: [{ type: "Parents", id: "domenico-scranton" }],
      sources: ["fg-cosimo"]
    },
    "mary-provini": {
      id: "mary-provini",
      name: "Mary Palmitessa Provini",
      years: "d. 2001",
      died: "1 May 2001",
      status: "documented",
      line: "scranton",
      role: "Child of Domenico and Victoria",
      summary: "Find A Grave 240230698.",
      relations: [{ type: "Parents", id: "domenico-scranton" }],
      sources: ["fg-mary-provini"]
    },
    "nellie-zito": {
      id: "nellie-zito",
      name: "Nellie Palmitessa Zito",
      years: "1914–1984",
      born: "23 May 1914",
      died: "26 November 1984",
      status: "documented",
      line: "scranton",
      role: "Child of Domenico and Victoria",
      summary: "Find A Grave 236320412.",
      relations: [{ type: "Parents", id: "domenico-scranton" }],
      sources: ["fg-nellie"]
    },
    "james-phillip": {
      id: "james-phillip",
      name: "Pvt James Phillip Palmitessa",
      years: "1918–1972",
      born: "20 December 1918",
      died: "21 February 1972",
      status: "documented",
      line: "scranton",
      role: "Child of Domenico and Victoria",
      summary: "Find A Grave 117598176.",
      relations: [{ type: "Parents", id: "domenico-scranton" }],
      sources: ["fg-james"]
    },
    "paul-paluch": {
      id: "paul-paluch",
      name: "Paul J. “Paluch” Palmitessa",
      years: "1923–2002",
      born: "11 June 1923",
      died: "1 October 2002",
      status: "documented",
      line: "scranton",
      role: "Child of Domenico and Victoria",
      summary: "Married Irene Yurchak (10 September 1929 – 4 February 2020).",
      relations: [
        { type: "Parents", id: "domenico-scranton" },
        { type: "Spouse", id: "irene-yurchak" }
      ],
      sources: ["fg-paul-paluch"]
    },
    "irene-yurchak": {
      id: "irene-yurchak",
      name: "Irene (Yurchak) Palmitessa",
      years: "1929–2020",
      born: "10 September 1929",
      died: "4 February 2020",
      status: "documented",
      line: "scranton",
      role: "Wife of Paul J. Palmitessa",
      summary: "NEPA Funeral Home obituary.",
      relations: [{ type: "Spouse", id: "paul-paluch" }],
      sources: ["obit-irene"]
    },
    jiacomo: {
      id: "jiacomo",
      name: "Jiacomo John Palmittessa",
      aka: ["Jiacomo Palmitessa"],
      years: "1889–1975",
      born: "8 May 1889, Italy",
      died: "26 November 1975, Portland, Maine (Maine death certificate number 7509481 quoted on the memorial). Compiled SSDI last residence Dover, NH 03820.",
      burial: "Saint Marys Cemetery, Biddeford. Spelling Palmittessa on the stone.",
      status: "documented",
      line: "maine",
      role: "Maine / New Hampshire immigrant — link to Dom unproven",
      summary: "Find A Grave (user-linked, not a civil image) gives parents Andrea Joseph Palmitessa (1873–deceased) and Dominaca Panara. If those parents are correct, Jiacomo is not a brother of Minnesota Paolo Domenico (1879) unless that pairing is wrong.",
      relations: [
        { type: "Spouse", id: "clementine" },
        { type: "Claimed parents (unproven)", id: "andrea-joseph" }
      ],
      sources: ["fg-jiacomo"]
    },
    clementine: {
      id: "clementine",
      name: "Clementine Petit Palmittessa",
      years: "1895–1950",
      born: "15 November 1895, Biddeford, Maine. Parents Ovide Petit and Olive Ayotte.",
      died: "1950",
      status: "documented",
      line: "maine",
      role: "Wife of Jiacomo",
      summary: "Find A Grave 211859118.",
      relations: [{ type: "Spouse", id: "jiacomo" }],
      sources: ["fg-clementine"]
    },
    "andrea-joseph": {
      id: "andrea-joseph",
      name: "Andrea Joseph Palmitessa",
      years: "1873–deceased",
      status: "hypothesis",
      line: "maine",
      role: "User-linked father of Jiacomo — not a civil image",
      summary: "Find A Grave user link. If correct, Jiacomo is not a brother of Minnesota Paolo Domenico unless that pairing is wrong.",
      relations: [
        { type: "Spouse", id: "dominaca-panara" },
        { type: "Child", id: "jiacomo" }
      ],
      sources: ["fg-jiacomo"]
    },
    "dominaca-panara": {
      id: "dominaca-panara",
      name: "Dominaca Panara",
      years: "",
      status: "hypothesis",
      line: "maine",
      role: "User-linked mother of Jiacomo",
      summary: "Find A Grave user link, not a civil image.",
      relations: [{ type: "Spouse", id: "andrea-joseph" }],
      sources: ["fg-jiacomo"]
    },
    "paolo-florida": {
      id: "paolo-florida",
      name: "Paolo Palmitessa (Florida)",
      years: "1886–1975",
      born: "17 March 1886 (compiled SSDI)",
      died: "1 September 1975, last residence Fort Lauderdale, FL 33322",
      status: "hypothesis",
      line: "maine",
      role: "Claimed brother of Jiacomo — lead, not a fact",
      summary: "A 22 June 2016 user note on locateancestors.com says this Paolo was the writer’s grandfather’s older brother, that both came to the U.S. in the early 1900s, and that the grandfather was Jiacomo Palmitessa who died 1975 in Dover, NH. This Florida Paolo is not the Minnesota Paolo Domenico (18 May 1879 – 1962).",
      relations: [],
      sources: ["ssdi-locate"]
    },
    donato: {
      id: "donato",
      name: "Donato Palmitessa",
      years: "1901–1975",
      born: "2 January 1901",
      died: "26 January 1975",
      place: "Reading / Berks County, Pennsylvania",
      status: "documented",
      line: "other",
      role: "Reading cluster — not connected to Dom in sources opened",
      summary: "Find A Grave 112987336. Wife Theresa R. Palmitessa (8 November 1914 – 15 February 1991).",
      relations: [{ type: "Spouse", id: "theresa-r" }],
      sources: ["fg-donato"]
    },
    "theresa-r": {
      id: "theresa-r",
      name: "Theresa R. Palmitessa",
      years: "1914–1991",
      born: "8 November 1914",
      died: "15 February 1991",
      status: "documented",
      line: "other",
      role: "Wife of Donato, Reading, PA",
      summary: "Find A Grave 112987386.",
      relations: [{ type: "Spouse", id: "donato" }],
      sources: ["fg-theresa-r"]
    },
    "paul-rochester": {
      id: "paul-rochester",
      name: "Paul Palmitessa of Rochester",
      years: "1887–1956",
      died: "30 January 1956",
      burial: "Holy Sepulchre Cemetery, Rochester, New York",
      status: "documented",
      line: "other",
      role: "Rochester cluster — not connected to Dom",
      summary: "Find A Grave 173885115.",
      relations: [{ type: "Spouse", id: "antoinetta" }],
      sources: ["fg-paul-rochester"]
    },
    antoinetta: {
      id: "antoinetta",
      name: "Antoinetta C. Palmitessa",
      years: "1885–1979",
      born: "20 May 1885",
      died: "26 June 1979",
      burial: "Holy Sepulchre Cemetery, Rochester, New York",
      status: "documented",
      line: "other",
      role: "Rochester cluster",
      summary: "Find A Grave 173885114.",
      relations: [{ type: "Spouse", id: "paul-rochester" }],
      sources: ["fg-antoinetta"]
    },
    "august-nj": {
      id: "august-nj",
      name: "August Palmitessa",
      years: "d. August 1984",
      place: "Hudson County, New Jersey",
      status: "documented",
      line: "other",
      role: "Hudson County cluster — not connected to Dom",
      summary: "Holy Cross Cemetery, North Arlington.",
      relations: [],
      sources: []
    },
    "cosmo-a": {
      id: "cosmo-a",
      name: "Cosmo A. Palmitessa",
      years: "d. 15 September 2004",
      place: "Hudson County, New Jersey",
      status: "documented",
      line: "other",
      role: "Hudson County cluster — not connected to Dom",
      summary: "Holy Cross Cemetery, North Arlington. Also listed in the Political Graveyard.",
      relations: [],
      sources: ["political-graveyard"]
    }
  },

  tree: {
    minnesota: [
      {
        id: "immigrants",
        label: "Immigrant generation — Minnesota line",
        note: "Best candidate for Dom’s paternal immigrants. Six children (Frances: “fourth of six”).",
        couples: [["paolo-domenico", "teresa-ippolito"]]
      },
      {
        id: "six",
        label: "Their six children",
        note: "Birthplace of Vito (Italy vs U.S.) is not in sources opened. Joseph is the only one with a named Italian comune.",
        people: ["vito-a", "joseph-frank", "mary-ann", "frances", "nina", "lorraine"]
      },
      {
        id: "joseph-ida",
        label: "Joseph F. and Ida Marie Held",
        note: "Married 21 November 1940. Indiana from 1966.",
        couples: [["joseph-frank", "ida-held"]]
      },
      {
        id: "joseph-children",
        label: "Joseph and Ida’s children",
        note: "Living people: names and published places only. Family account: Jerry is Dom’s paternal grandfather.",
        people: ["rita", "jerry", "sandi", "john", "joe", "mary-nord", "joann"]
      },
      {
        id: "jerry-susie",
        label: "Jerry Palmitessa and Susie Shez — family account",
        note: "The subject states Dom’s father was born to this couple in 1970. Jerry’s published wife in 2015 is Jan.",
        couples: [["jerry", "susie-shez"]]
      },
      {
        id: "father-amy",
        label: "Dom’s parents — family account",
        note: "Father named Poaolo Dominic Palmitessa, born 1970. Mother Amy of the Rudd household (published as Amy R. Burch). Not captioned as parents in the obituaries opened.",
        couples: [["poaolo-father", "amy-burch"]]
      },
      {
        id: "subject",
        label: "The subject",
        people: ["poaolo-iv"]
      }
    ],
    rudd: [
      {
        id: "rudd-couple",
        label: "Rudd household — Plymouth, Indiana",
        note: "The first opened source that uses the IV styling. Family account: Amy is Dom’s mother; Angela is a maternal aunt.",
        couples: [["ned-rudd", "mary-lee-rudd"]]
      },
      {
        id: "rudd-children",
        label: "Their children, as published",
        people: ["angela-rudd", "amy-burch", "ned-jr", "jason-rudd"]
      },
      {
        id: "subject",
        label: "The subject",
        people: ["poaolo-iv"]
      }
    ],
    scranton: [
      {
        id: "scranton-immigrants",
        label: "Scranton / Lackawanna County — separate family until proven otherwise",
        couples: [["domenico-scranton", "victoria-ungaro"]]
      },
      {
        id: "scranton-children",
        label: "Their children",
        people: ["frank-scranton", "cosimo", "mary-provini", "nellie-zito", "james-phillip", "paul-paluch"]
      }
    ],
    maine: [
      {
        id: "maine-immigrants",
        label: "Biddeford, Maine / Dover, New Hampshire",
        couples: [["jiacomo", "clementine"]]
      }
    ]
  },

  places: [
    { id: "monopoli", name: "Monopoli, Puglia", lat: 40.954, lng: 17.305, status: "documented", line: "origin", blurb: "Joseph F. Palmitessa was born here in August 1914 — the only opened source that names a comune of origin for this line. Surname ranked 13th in town. Palazzo Palmitessa, Largo Amalfitana, is an 18th-century palazzo; that does not by itself prove any one immigrant’s birthplace." },
    { id: "st-paul", name: "St. Paul, Minnesota", lat: 44.9537, lng: -93.09, status: "documented", line: "minnesota", blurb: "Frances was born here on 12 November 1918. Roma Grocery on Seven Corners. Joseph and Ida lived on West 7th Street and Winslow Avenue." },
    { id: "seven-corners", name: "Seven Corners, St. Paul", lat: 44.9416, lng: -93.1108, status: "documented", line: "minnesota", blurb: "Frances’s obituary says she worked at her father’s Roma Grocery on Seven Corners." },
    { id: "mendota", name: "Mendota Heights, Minnesota", lat: 44.876, lng: -93.148, status: "documented", line: "minnesota", blurb: "Resurrection Catholic Cemetery — burial of Paolo Domenico (1962), Teresa (1976), and Nina (2008)." },
    { id: "randolph", name: "Randolph, Minnesota", lat: 44.526, lng: -93.019, status: "documented", line: "minnesota", blurb: "Lakeside Cemetery — Joseph F. (2007) and Ida (2015)." },
    { id: "grundy", name: "Grundy Center, Iowa", lat: 42.3736, lng: -92.7755, status: "documented", line: "minnesota", blurb: "Joseph and Ida moved here in 1961. Rita married Dallas Dixon here on 26 March 1966." },
    { id: "plymouth", name: "Plymouth, Indiana", lat: 41.3437, lng: -86.3097, status: "documented", line: "minnesota", blurb: "Joseph and Ida lived in Indiana from 1966. Dom is named as Ned Rudd’s grandson (2006) and swam for Plymouth High School in 2008–09. Hostetler obituaries document Palmitessa in-laws here." },
    { id: "warsaw", name: "Warsaw, Indiana", lat: 41.2381, lng: -85.853, status: "documented", line: "minnesota", blurb: "2022 Donald E. Luther obituary names Dominic Palmitessa of Warsaw." },
    { id: "south-bend", name: "South Bend, Indiana", lat: 41.6764, lng: -86.252, status: "living", line: "rudd", blurb: "Mary Lee Rudd’s 2020 obituary lists Angela Rudd, South Bend." },
    { id: "northfield", name: "Northfield, Minnesota", lat: 44.4583, lng: -93.1616, status: "documented", line: "minnesota", blurb: "Ida died here on 27 December 2015." },
    { id: "cannon-falls", name: "Cannon Falls, Minnesota", lat: 44.5069, lng: -92.9055, status: "living", line: "minnesota", blurb: "John and Sue Ann Palmitessa, as of published obituaries." },
    { id: "stacy", name: "Stacy, Minnesota", lat: 45.398, lng: -92.987, status: "living", line: "minnesota", blurb: "Mary Palmitessa-Nord, of Stacy as of 2015." },
    { id: "webster", name: "Webster, Minnesota", lat: 44.5297, lng: -93.3477, status: "living", line: "minnesota", blurb: "Sandi Palmitessa Hostetler, of Webster, Minnesota." },
    { id: "waterloo", name: "Waterloo, Iowa", lat: 42.4928, lng: -92.3426, status: "living", line: "minnesota", blurb: "Rita Palmitessa Dixon, Waterloo as of 2015." },
    { id: "defiance", name: "Defiance, Ohio", lat: 41.2845, lng: -84.3627, status: "hypothesis", line: "minnesota", blurb: "A 2012-era address was supplied as a historical footprint. No genealogical item opened for this brief independently confirmed that occupancy." },
    { id: "scranton", name: "Scranton, Pennsylvania", lat: 41.409, lng: -75.6624, status: "documented", line: "scranton", blurb: "Domenico “Domnick” Palmitessa cluster. Link to Dom unproven." },
    { id: "biddeford", name: "Biddeford, Maine", lat: 43.4926, lng: -70.4534, status: "documented", line: "maine", blurb: "Jiacomo John Palmittessa buried at Saint Marys Cemetery. Link to Dom unproven." },
    { id: "dover", name: "Dover, New Hampshire", lat: 43.1979, lng: -70.8737, status: "documented", line: "maine", blurb: "Compiled SSDI last residence of Jiacomo Palmitessa, 03820." },
    { id: "lauderdale", name: "Fort Lauderdale, Florida", lat: 26.1224, lng: -80.1373, status: "hypothesis", line: "maine", blurb: "Paolo Palmitessa (17 March 1886 – 1975), claimed in a 2016 user note as Jiacomo’s brother. Lead, not a fact. Not the Minnesota Paolo." },
    { id: "reading", name: "Reading, Pennsylvania", lat: 40.3356, lng: -75.9269, status: "documented", line: "other", blurb: "Donato Palmitessa (1901–1975). Not connected to Dom in sources opened." },
    { id: "rochester", name: "Rochester, New York", lat: 43.1566, lng: -77.6088, status: "documented", line: "other", blurb: "Paul Palmitessa (1887–1956) and Antoinetta C. Palmitessa. Holy Sepulchre Cemetery." },
    { id: "north-arlington", name: "North Arlington, New Jersey", lat: 40.7884, lng: -74.1268, status: "documented", line: "other", blurb: "August Palmitessa (d. 1984) and Cosmo A. Palmitessa (d. 2004), Holy Cross Cemetery. Hudson County cluster." }
  ],

  events: [
    { year: "18th c.", sort: 1700, title: "Palazzo Palmitessa, Monopoli", text: "An 18th-century palazzo at Largo Amalfitana is catalogued under the name Palmitessa. Surname geography, not a pedigree.", status: "documented", people: [] },
    { year: "1879", sort: 1879, title: "Paolo Domenico is born", text: "Find A Grave: 18 May 1879. Italian civil birth not found. Monopoli is the leading hypothesis for his birthplace, not a civil-register fact.", status: "documented", people: ["paolo-domenico"] },
    { year: "1889", sort: 1889, title: "Teresa Firenza Ippolito is born", text: "Find A Grave: 18 August 1889. SSDI extract: 10 August 1889. Dates are close, not identical.", status: "documented", people: ["teresa-ippolito"] },
    { year: "1909", sort: 1909, title: "Vito A. Palmitessa is born", text: "Compiled SSDI: 23 August 1909. Birthplace (Italy vs U.S.) not in sources opened.", status: "documented", people: ["vito-a"] },
    { year: "1914", sort: 1914, title: "Joseph F. is born in Monopoli", text: "The only opened source that names a comune of origin for a person in this line. Obituary 4 August; Find A Grave 2 August.", status: "documented", people: ["joseph-frank"] },
    { year: "1914–1918", sort: 1916, title: "Immigration window (inferred)", text: "Joseph was born in Monopoli in August 1914; Frances was born in St. Paul in November 1918. Ship, port, and exact year were not found. Ellis Island is a hypothesis, not a citation.", status: "hypothesis", people: ["paolo-domenico", "teresa-ippolito", "joseph-frank"] },
    { year: "1916", sort: 1916.5, title: "Mary Ann is born", text: "3 November 1916.", status: "documented", people: ["mary-ann"] },
    { year: "1918", sort: 1918, title: "Frances is born in St. Paul", text: "12 November 1918, Ramsey County. Fourth of six. Locks the family in Minnesota by this date.", status: "documented", people: ["frances"] },
    { year: "1921", sort: 1921, title: "Nina is born", text: "6 September 1921.", status: "documented", people: ["nina"] },
    { year: "1924", sort: 1924, title: "Lorraine is born", text: "2 July 1924.", status: "documented", people: ["lorraine"] },
    { year: "1940", sort: 1940, title: "Joseph marries Ida Marie Held", text: "21 November 1940. Ida was born 23 May 1915 in St. Paul, parents Carl Held and Ida Mahr.", status: "documented", people: ["joseph-frank", "ida-held"] },
    { year: "1942", sort: 1942, title: "Joann M. Palmitessa is born", text: "11 December 1942 – 12 June 2004. Unmarried in her obituary.", status: "documented", people: ["joann"] },
    { year: "1961", sort: 1961, title: "Move to Grundy Center, Iowa", text: "Joseph and Ida leave St. Paul for Grundy Center.", status: "documented", people: ["joseph-frank", "ida-held"] },
    { year: "1962", sort: 1962, title: "Paolo Domenico dies", text: "1 March 1962. Buried Resurrection Catholic Cemetery, Mendota Heights.", status: "documented", people: ["paolo-domenico"] },
    { year: "1966", sort: 1966, title: "Indiana — first documented Palmitessa footprint in the state", text: "Joseph and Ida move to Indiana. Rita marries Dallas Dixon on 26 March 1966 in Grundy Center, Iowa.", status: "documented", people: ["joseph-frank", "ida-held", "rita"] },
    { year: "1970", sort: 1970, title: "Poaolo Dominic Palmitessa is born", text: "Family account: Dom’s father, son of Jerry Palmitessa and Susie Shez. No civil birth certificate was opened. David M. Palmitessa (8 February 1970 – 25 January 2002) is a different grandson of Joseph F.", status: "family", people: ["poaolo-father", "jerry", "susie-shez"] },
    { year: "1976", sort: 1976, title: "Teresa dies", text: "3 February 1976. Same cemetery as Paolo Domenico.", status: "documented", people: ["teresa-ippolito"] },
    { year: "1992", sort: 1992, title: "Reported birth of Poaolo Dominic Palmitessa IV", text: "29 July 1992 used for record matching. No civil birth certificate was opened. Family account: son of Poaolo Dominic Palmitessa and Amy.", status: "documented", people: ["poaolo-iv", "poaolo-father", "amy-burch"] },
    { year: "2006", sort: 2006, title: "The IV styling appears in print", text: "Ned W. Rudd’s Plymouth obituary names grandson Poaolo Dominic Palmitessa IV — first opened source for that styling and spelling.", status: "documented", people: ["ned-rudd", "poaolo-iv"] },
    { year: "2007", sort: 2007, title: "Joseph F. dies; grandson Paolo is listed", text: "13 September 2007. Obituary lists grandchildren including Paolo, Electra, and others, plus deceased grandsons David and Brian. Family account: Dom is a great-grandson; the grandson Paolo is the plausible published match for Dom’s father.", status: "documented", people: ["joseph-frank", "poaolo-father"] },
    { year: "2008–09", sort: 2008, title: "Plymouth High School swimming", text: "IHSAA Warsaw sectional lists Poaolo Palmitessa, sophomore — consistent with a July 1992 birth.", status: "documented", people: ["poaolo-iv"] },
    { year: "2015", sort: 2015, title: "Ida dies in Northfield", text: "27 December 2015. Her obituary is a principal source for the children’s published places.", status: "documented", people: ["ida-held"] },
    { year: "2020", sort: 2020, title: "Mary Lee Rudd dies", text: "2 December 2020. Lists Angela Rudd, South Bend.", status: "documented", people: ["mary-lee-rudd", "angela-rudd"] },
    { year: "2022", sort: 2022, title: "Quinn Li Palmitessa named in print", text: "Donald E. Luther obituary names her as wife of Dominic Palmitessa of Warsaw.", status: "documented", people: ["quinn-li", "poaolo-iv"] }
  ],

  iv: [
    { numeral: "1", person: "paolo-domenico", status: "documented", sameGiven: true, verdict: "Paolo Domenico “Paul” Palmitessa, the immigrant. First man in this paternal line with the given name Paolo." },
    { numeral: "2", person: "joseph-frank", status: "documented", sameGiven: false, verdict: "Joseph Frank Palmitessa, born Monopoli 1914. In the line. Not named Paolo — that is not a missing person." },
    { numeral: "3", person: "jerry", status: "living", sameGiven: false, verdict: "Jerry Palmitessa, son of Joseph. In the line (family account: father of the next). Not named Paolo. No suffix." },
    { numeral: "4", person: "poaolo-father", status: "family", sameGiven: true, verdict: "Poaolo Dominic Palmitessa, b. 1970. Second man in this line with the given name. No suffix." },
    { numeral: "5", person: "poaolo-iv", status: "documented", sameGiven: true, verdict: "Poaolo Dominic Palmitessa IV. Third man in this line with the given name. The IV styling is documented on him only; it is not a count of four Paolos." }
  ],

  chapters: [
    {
      id: "name",
      kicker: "Puglia",
      title: "A rare name on the Adriatic",
      image: "assets/monopoli-harbor.jpg",
      caption: "Atmospheric view in the spirit of Monopoli’s porto vecchio — not a photograph of a family property. The surname is concentrated here; that is geography, not a pedigree.",
      people: ["joseph-frank"],
      body: [
        { type: "p", text: "Palmitessa is a rare Italian surname with its heaviest modern concentration in **Monopoli** (provincia di Bari / Città metropolitana di Bari, Puglia). Cognomix ranks it **13th in Monopoli**, counts about **368 families** in Italy, and calls it characteristic of Barletta and Monopoli in the Bari area. An 18th-century palazzo at **Largo Amalfitana** is catalogued under the name Palmitessa." },
        { type: "callout", tone: "caution", text: "A palazzo and a surname map do **not** by themselves prove any one immigrant’s birthplace." },
        { type: "p", text: "Cognomix suggests the name may derive, through dialectal change, from the Greek *Palamedes*. Treat etymology as background color, not as evidence for this pedigree." },
        { type: "p", text: "For the U.S. line that actually reaches Indiana — and is the only Palmitessa cluster with a **documented** path toward Dom — the immigrant couple is Paolo Domenico “Paul” Palmitessa and Theresa / Teresa Firenza Ippolito Palmitessa of St. Paul, Minnesota." }
      ]
    },
    {
      id: "immigrants",
      kicker: "Minnesota",
      title: "Paolo, Teresa, and Roma Grocery",
      image: "assets/stpaul-grocery.jpg",
      caption: "An atmospheric reconstruction of an early-20th-century Midwestern grocery — not a photograph of Roma Grocery, whose storefront was not located for this archive.",
      people: ["paolo-domenico", "teresa-ippolito", "frances"],
      body: [
        { type: "p", text: "**Paolo Domenico “Paul” Palmitessa** (Find A Grave: born 18 May 1879, died 1 March 1962) and **Theresa / Teresa Firenza Ippolito Palmitessa** (born 18 August 1889, died 3 February 1976) are buried at Resurrection Catholic Cemetery, Mendota Heights, Dakota County, Minnesota." },
        { type: "p", text: "Their daughter Frances’s 2014 obituary names her parents **Paolo Dominic and Teresa Firenza (Ippolito) Palmitessa**, says Frances was born in St. Paul on 12 November 1918, was **fourth of six children**, and worked at her father’s **Roma Grocery on Seven Corners** in St. Paul." },
        { type: "p", text: "Their son **Joseph F. Palmitessa**’s 2007 obituary states he was **born in Monopoli, Italy**, in August 1914. That is the **only opened source that names a comune of origin** for a person in this line." },
        { type: "callout", tone: "hypothesis", text: "Immigration window, inferred, not from a manifest: after Joseph’s August 1914 Monopoli birth and before Frances’s November 1918 St. Paul birth — unless Joseph immigrated separately as a child. Ship, port, and exact year were not found. Naturalization was not found." }
      ]
    },
    {
      id: "six",
      kicker: "Generation two",
      title: "Six children",
      image: "assets/monopoli-street.jpg",
      caption: "Limestone streets of a Puglian Adriatic old town. Joseph’s 1914 birth is the lock on Monopoli; his siblings’ Italian vs U.S. births are not all in the sources opened here.",
      people: ["vito-a", "joseph-frank", "mary-ann", "frances", "nina", "lorraine"],
      body: [
        { type: "p", text: "Frances said she was fourth of six. Obituaries and Find A Grave name them:" },
        { type: "p", text: "1. **Vito A.** (23 August 1909 – 5 August 1998). Wife Carmen. Birthplace not in sources opened.\n2. **Joseph Frank** (August 1914, Monopoli – 13 September 2007). Married Ida Marie Held, 21 November 1940.\n3. **Mary Ann Palmitessa Bifulk** (3 November 1916 – 27 December 2007). Married Archie Bifulk.\n4. **Frances Christine Palmitessa Sportelli** (12 November 1918 – 24 July 2014). Married Victor Peter Sportelli.\n5. **Nina Victoria Palmitessa Grazzini** (6 September 1921 – 20 August 2008). Married Albert Grazzini.\n6. **Lorraine Palmitessa Schuweiler** (2 July 1924 – 10 April 2018). Husband Bernard predeceased Frances." },
        { type: "callout", tone: "notfound", text: "None of the six is named Paolo. A Rev. Paul Palmitessa, born 18 January 1931, served in the Archdiocese of St. Paul and Minneapolis (ordination 1956). Parentage was not established; Frances’s list does not include him. He is **not** placed on Dom’s pedigree here." }
      ]
    },
    {
      id: "indiana",
      kicker: "Westward, then south",
      title: "Joseph, Ida, and Indiana",
      image: "assets/indiana-square.jpg",
      caption: "Atmospheric Midwestern county-seat square — the landscape of Marshall County, not a photograph of a family house.",
      people: ["joseph-frank", "ida-held", "rita", "jerry", "sandi", "john", "joe", "mary-nord", "joann"],
      body: [
        { type: "p", text: "**Ida Marie Held Palmitessa** was born 23 May 1915 in St. Paul, parents Carl Held and Ida Mahr. She died 27 December 2015 in Northfield, Minnesota. She and Joseph lived on West 7th Street and Winslow Avenue in St. Paul; moved to **Grundy Center, Iowa, in 1961**; **moved to Indiana in 1966**; later North Carolina; returned to St. Paul; later Cannon Falls / Northfield." },
        { type: "callout", tone: "documented", text: "That Indiana stay is the first documented Palmitessa footprint in the state that later includes Dom." },
        { type: "p", text: "Their children, from the 2007 and 2015 obituaries: **Rita** (Dallas Dixon); **Jerry** (Jan); **Sandi** (Neal Hostetler); **John** (Sue); **Joseph/Joe** (Sher / Debra); **Mary** (Chris Palmitessa-Nord); and **Joann** (d. 2004). Sandi and John married into the **Hostetler** family of Plymouth, Marshall County." },
        { type: "callout", tone: "family", text: "**Family account:** Jerry Palmitessa and Susie Shez are Dom’s paternal grandparents. Jerry’s published wife in 2015 is Jan." },
        { type: "p", text: "Joseph’s 2007 obituary lists grandchildren including **Paolo**, Electra, Angie, Richard, Christa, Lynn, Trisia, Dawn, and others, plus deceased grandsons David and Brian. With the family account, Dom is a **great-grandson**; the grandson Paolo is the plausible published match for Dom’s father." }
      ]
    },
    {
      id: "dom",
      kicker: "Plymouth",
      title: "Poaolo IV, as the records actually say",
      image: "assets/indiana-square.jpg",
      caption: "Plymouth, Marshall County, is the published hometown of the Rudd family and of a 2008–09 high-school swimmer named Poaolo Palmitessa.",
      people: ["poaolo-iv", "poaolo-father", "amy-burch", "jerry", "susie-shez", "ned-rudd", "mary-lee-rudd", "angela-rudd", "quinn-li"],
      body: [
        { type: "p", text: "**Poaolo Dominic Palmitessa IV** is named as a **grandson** of Ned W. Rudd, D.V.M. (18 December 1932 – 10 November 2006) and, by the same household, of Mary Lee (Williams) Rudd (20 March 1934 – 2 December 2020), a lifetime Plymouth, Indiana, family." },
        { type: "p", text: "Ned’s children: Angela R. Rudd; Amy R. (Roger / later Mindy) Burch; Ned W. Rudd Jr.; Jason B. Rudd. The 2006 grandchild list names **Poaolo Dominic Palmitessa IV** separately from **Eric, Callie, Devon and Quintin Burch**." },
        { type: "callout", tone: "family", text: "**Family account (13 September 2026):** Dom’s father is **Poaolo Dominic Palmitessa**, born **1970** to **Jerry Palmitessa** and **Susie Shez**. He was married to Dom’s mother **Amy**. Angela Rudd is a maternal aunt. The obituaries never caption “son of Amy.”" },
        { type: "p", text: "A 2008–09 IHSAA swimming result lists **Poaolo Palmitessa**, sophomore, Plymouth High School — consistent with a July 1992 birth. Quinn Li Palmitessa is named as wife of Dominic Palmitessa of Warsaw in the 2022 Donald E. Luther obituary (her father)." },
        { type: "callout", tone: "documented", text: "The Fasching/Shez names (paternal) and the Rudd names (maternal) are the two sides of the same family. David M. Palmitessa (1970–2002) remains a deceased grandson of Joseph F.; the subject says that is **not** his father." }
      ]
    },
    {
      id: "iv",
      kicker: "Onomastics",
      title: "How the “IV” numbering actually works",
      image: "assets/research-desk.jpg",
      caption: "This archive keeps documented facts apart from hypotheses. No dates, relatives, or towns are invented.",
      people: ["paolo-domenico", "joseph-frank", "jerry", "poaolo-father", "poaolo-iv"],
      body: [
        { type: "p", text: "The styling **Poaolo Dominic Palmitessa IV** appears in Ned Rudd’s 2006 Plymouth obituary. The given name is spelled **Poaolo** there, and **Poaolo** again in the 2008–09 Plymouth High School swim result. The father, by family account, is **Poaolo Dominic Palmitessa** with **no suffix**." },
        { type: "p", text: "The paternal line is **Paolo Domenico → Joseph F. → Jerry → Poaolo (b. 1970) → Poaolo IV**. Joseph and Jerry belong in that line. They are not named Paolo, and they are not a hole in the record." },
        { type: "callout", tone: "family", text: "Only **three** men in this line have the given name Paolo/Poaolo: the immigrant, the father, and the subject. There are not four Paolos or Poaolos here. IV is a family styling on the subject, not a headcount of that given name." }
      ]
    },
    {
      id: "clusters",
      kicker: "Same surname, other ports",
      title: "Other Palmitessa families in America",
      image: "assets/monopoli-harbor.jpg",
      caption: "Several U.S. Palmitessa clusters are real and documented. No record opened here ties any of them to Dom.",
      people: ["domenico-scranton", "jiacomo", "paolo-florida", "donato", "paul-rochester"],
      body: [
        { type: "p", text: "**Scranton / Lackawanna County, Pennsylvania:** Domenico “Domnick” Palmitessa (born 1880 or 1879 — the dates disagree) and Victoria Ungaro. Different wife, different burial, different death year from the Minnesota couple." },
        { type: "p", text: "**Biddeford, Maine / Dover, New Hampshire:** Jiacomo John Palmittessa (8 May 1889 – 26 November 1975). A 2016 user note claims he was a brother of a Florida Paolo (17 March 1886 – 1975). That is a **lead, not a fact**, and that Florida Paolo is **not** Minnesota’s Paolo Domenico." },
        { type: "p", text: "Also documented and unconnected here: **Reading / Berks County, PA** (Donato); **Rochester, NY** (Paul and Antoinetta); **Hudson County, NJ** (August and Cosmo A.)." },
        { type: "callout", tone: "documented", text: "The Minnesota **Paolo Domenico Palmitessa (1879–1962)** is the only immigrant of that name with a **documented** descendant trail that reaches Indiana. Family account now fills Jerry → Poaolo Dominic (b. 1970) → Dom. Italian civil proof of Paolo Domenico’s own birthplace is still missing." }
      ]
    }
  ],

  quiz: [
    {
      q: "Which person in this line has a named Italian comune of origin in an opened source?",
      choices: [
        "Paolo Domenico Palmitessa (1879–1962)",
        "Joseph F. Palmitessa (1914–2007)",
        "Domenico “Domnick” Palmitessa of Scranton",
        "Jiacomo Palmittessa of Biddeford"
      ],
      answer: 1,
      why: "Joseph’s 2007 obituary says he was born in Monopoli, Italy, in August 1914. That is the only opened source that names a comune for this line. Paolo Domenico’s own Monopoli birth is a hypothesis."
    },
    {
      q: "What does “IV” mean in this family line?",
      choices: [
        "Four generations of men all named Paolo/Poaolo",
        "A missing son of Paolo Domenico named Paolo",
        "A documented family styling on the subject. The line is Paolo, Joseph, Jerry, Poaolo, Poaolo IV — three men of that given name, not four",
        "It counts an Italian Paolo born before 1879"
      ],
      answer: 2,
      why: "The styling appears in Ned Rudd’s 2006 obituary. Family account gives the paternal line as Paolo Domenico → Joseph → Jerry → Poaolo (no suffix) → Poaolo IV. Joseph and Jerry are in the line and not named Paolo. A fourth Paolo/Poaolo is not listed here."
    },
    {
      q: "When is the first documented Palmitessa footprint in Indiana?",
      choices: [
        "Joseph F.’s 1914 birth",
        "Joseph and Ida’s move to Indiana in 1966",
        "Dom’s reported 1992 birth",
        "The 2008–09 Plymouth High School swim result"
      ],
      answer: 1,
      why: "Ida’s memorial states they moved to Indiana in 1966. That is the first documented Palmitessa footprint in the state that later includes Dom."
    },
    {
      q: "Who does the family account name as Dom’s mother?",
      choices: [
        "Angela R. Rudd, because she was listed without a spouse in 2006",
        "Amy of the Rudd household (published as Amy R. Burch); Angela is a maternal aunt",
        "Susie Shez",
        "Ida Marie Held"
      ],
      answer: 1,
      why: "The subject states his mother is Amy and that Angela is a maternal aunt. The obituaries never caption either sister as mother. An earlier archive reading that treated Angela as likely mother is withdrawn."
    },
    {
      q: "Which U.S. Palmitessa cluster has a documented path toward Dom?",
      choices: [
        "Scranton / Lackawanna County, Pennsylvania",
        "Biddeford, Maine / Dover, New Hampshire",
        "The Minnesota line of Paolo Domenico and Teresa Ippolito",
        "Hudson County, New Jersey"
      ],
      answer: 2,
      why: "Other clusters are real. No record opened here ties them to Dom. Minnesota is the working hypothesis, not a closed proof."
    },
    {
      q: "What was found for the immigrant couple’s ship, port, and year of arrival?",
      choices: [
        "Ellis Island, 1912, from Monopoli",
        "Boston, 1915",
        "Paese.app’s two Palmitessa arrivals 1830–1912, identified as this couple",
        "Nothing. Ship, port, and exact year were not found"
      ],
      answer: 3,
      why: "The 1914–1918 window is inferred from Joseph’s Monopoli birth and Frances’s St. Paul birth. Paese.app’s two arrivals are surname-level and both before 1912. Ellis Island is the usual default for Puglia in this era — a hypothesis, not a citation."
    }
  ],

  questions: [
    "Monopoli nati 18 May 1879 (or nearby) for Paolo / Paolo Domenico Palmitessa — parents, street, parish.",
    "Monopoli nati 2–4 August 1914 for Giuseppe Palmitessa — should name both parents and lock the comune.",
    "Passenger list 1914–1918 (NY or Boston) for Palmitessa, last residence Monopoli.",
    "WWI draft (1917–18) and/or WWII “old man’s draft” (1942) for Paul Palmitessa of St. Paul.",
    "Minnesota naturalization (Ramsey County) for Paolo/Paul Palmitessa.",
    "U.S. census 1920–1950 households in St. Paul (Ramsey) and Scranton (Lackawanna).",
    "A public record that names Dom’s father as Poaolo Dominic Palmitessa, son of Jerry Palmitessa and Susie Shez (currently family account). Joseph’s 2007 grandson Paolo is a plausible match, not a caption.",
    "A public record captioning Amy (Rudd / later Burch) as Dom’s mother. Family account says she is.",
    "Whether the IV styling was meant to count something other than men named Paolo/Poaolo (the paternal line has three of that given name through the subject).",
    "Italian births that would prove or disprove the user-claimed brothers Dominic (Scranton), Paolo (Florida 1886), and Jiacomo (Maine/NH)."
  ],

  pulls: [
    "Monopoli nati 1879 (around 18 May) for Paolo / Paolo Domenico Palmitessa — parents’ names, street, parish.",
    "Monopoli nati 1914 (2–4 August) for Giuseppe / Joseph Palmitessa — should name father Paolo Domenico and mother Teresa Ippolito.",
    "Monopoli matrimoni ~1908–1914 for Paolo Palmitessa & Teresa Ippolito.",
    "U.S. passenger list 1914–1918, New York (and Boston), names Palmitessa / Palmitesa / Palamitessa, last residence Monopoli.",
    "Minnesota naturalization (Ramsey County) and WWI draft (1917–18) for Paul Palmitessa — those cards usually name the Italian town."
  ],

  sources: {
    "Family account": [
      { id: "family-2026", title: "Subject’s family account, 13 September 2026 — father Poaolo Dominic Palmitessa (b. 1970), parents Jerry Palmitessa and Susie Shez, mother Amy", url: "Palmitessa-family-history.md" }
    ],
    "Find A Grave": [
      { id: "fg-paolo", title: "Paolo Domenico “Paul” Palmitessa (1879–1962), 228720444", url: "https://www.findagrave.com/memorial/228720444/paolo_domenico-palmitessa" },
      { id: "fg-theresa", title: "Theresa F. Ippolito Palmitessa (1889–1976), 228720463", url: "https://www.findagrave.com/memorial/228720463/theresa_f-palmitessa" },
      { id: "fg-frances", title: "Frances Christine Palmitessa Sportelli (1918–2014), 133282085", url: "https://www.findagrave.com/memorial/133282085/frances-christine-sportelli" },
      { id: "fg-joseph", title: "Joseph Frank Palmitessa (1914–2007), 75823010", url: "https://www.findagrave.com/memorial/75823010/joseph-frank-palmitessa" },
      { id: "fg-ida", title: "Ida Marie Held Palmitessa (1915–2015), 156429720", url: "https://www.findagrave.com/memorial/156429720/ida-marie-palmitessa" },
      { id: "fg-nina", title: "Nina Victoria Palmitessa Grazzini (1921–2008), 175203827", url: "https://www.findagrave.com/memorial/175203827/nina-victoria-grazzini" },
      { id: "fg-lorraine", title: "Lorraine Palmitessa Schuweiler (1924–2018), 221645051", url: "https://www.findagrave.com/memorial/221645051/lorraine-schuweiler" },
      { id: "fg-david", title: "David M. Palmitessa (1970–2002), 75823051", url: "https://www.findagrave.com/memorial/75823051/david-m-palmitessa" },
      { id: "fg-victor", title: "Victor Peter Sportelli (1918–1991), 3504479", url: "https://www.findagrave.com/memorial/3504479/victor-peter-sportelli" },
      { id: "fg-domenico-scranton", title: "Domenico “Domnick” Palmitessa (1880–1968), 236323526", url: "https://www.findagrave.com/memorial/236323526/domenico-palmitessa" },
      { id: "fg-victoria-ungaro", title: "Victoria Ungaro Palmitessa (1886–1957), 236323581", url: "https://www.findagrave.com/memorial/236323581/victoria-ungaro" },
      { id: "fg-frank-scranton", title: "Francis “Frank” Palmitessa (1906–1994), 255227480", url: "https://www.findagrave.com/memorial/255227480/francis-palmitessa" },
      { id: "fg-cosimo", title: "Cosimo Palmitessa (1912–1916), 117598213", url: "https://www.findagrave.com/memorial/117598213/cosimo-palmitessa" },
      { id: "fg-mary-provini", title: "Mary Palmitessa Provini (d. 2001), 240230698", url: "https://www.findagrave.com/memorial/240230698/mary-provini" },
      { id: "fg-nellie", title: "Nellie Palmitessa Zito (1914–1984), 236320412", url: "https://www.findagrave.com/memorial/236320412/nellie-zito" },
      { id: "fg-james", title: "Pvt James Phillip Palmitessa (1918–1972), 117598176", url: "https://www.findagrave.com/memorial/117598176/james_phillip-palmitessa" },
      { id: "fg-paul-paluch", title: "Paul J. “Paluch” Palmitessa (1923–2002), 255231751", url: "https://www.findagrave.com/memorial/255231751/paul_j-palmitessa" },
      { id: "fg-donato", title: "Donato Palmitessa (1901–1975), 112987336", url: "https://www.findagrave.com/memorial/112987336/donato-palmitessa" },
      { id: "fg-theresa-r", title: "Theresa R. Palmitessa (1914–1991), 112987386", url: "https://www.findagrave.com/memorial/112987386/theresa_r-palmitessa" },
      { id: "fg-jiacomo", title: "Jiacomo John Palmittessa (1889–1975), 211859116", url: "https://www.findagrave.com/memorial/211859116/jiacomo_john-palmittessa" },
      { id: "fg-clementine", title: "Clementine Petit Palmittessa (1895–1950), 211859118", url: "https://www.findagrave.com/memorial/211859118/clementine-palmittessa" },
      { id: "fg-paul-rochester", title: "Paul Palmitessa of Rochester (1887–1956), 173885115", url: "https://www.findagrave.com/memorial/173885115/paul-palmitessa" },
      { id: "fg-antoinetta", title: "Antoinetta C. Palmitessa (1885–1979), 173885114", url: "https://www.findagrave.com/memorial/173885114/antoinetta-c-palmitessa" }
    ],
    "Obituaries": [
      { id: "obit-joseph", title: "Joseph F. Palmitessa, Pioneer Press, 19–21 Sep 2007", url: "https://www.twincities.com/obituaries/joseph-f-palmitessa-mn/" },
      { id: "obit-ida", title: "Ida Marie Palmitessa, Pioneer Press, 29–31 Dec 2015", url: "https://www.twincities.com/obituaries/ida-marie-palmitessa-northfield-mn/" },
      { id: "obit-joann", title: "Joann M. Palmitessa, Pioneer Press, 15–17 Jun 2004", url: "https://www.twincities.com/obituaries/joann-m-palmitessa-mn/" },
      { id: "obit-frances", title: "Frances C. Sportelli, White Funeral Homes", url: "https://www.whitefuneralhomes.com/obituary/2615832" },
      { id: "obit-nina", title: "Nina V. Grazzini, Star Tribune, 24 Aug 2008", url: "https://obituaries.startribune.com/obituary/nina-v-grazzini-1090527350" },
      { id: "obit-mary-ann", title: "Mary A. Bifulk, Pioneer Press, 28–30 Dec 2007", url: "https://www.twincities.com/obituaries/mary-a-bifulk-mn/" },
      { id: "obit-dallas", title: "Dallas Dixon, IAGenWeb Black Hawk, 2015", url: "http://iagenweb.org/boards/blackhawk/obituaries/index.cgi?read=570525" },
      { id: "obit-ned-rudd", title: "Ned W. Rudd, D.V.M., Johnson-Danielson, 10 Nov 2006", url: "https://www.johnson-danielson.com/obituaries/ned-w-rudd-d-v-m" },
      { id: "obit-mary-lee", title: "Mary Lee (Williams) Rudd, Johnson-Danielson, 2 Dec 2020", url: "https://www.johnson-danielson.com/obituaries/mary-lee-rudd" },
      { id: "obit-neal-hostetler", title: "Neal R. Hostetler, InkFreeNews, 9 Jul 2025", url: "https://www.inkfreenews.com/2025/07/09/neal-r-hostetler/" },
      { id: "obit-hollett", title: "Scott J. Hollett, Palmer Funeral Homes", url: "https://www.palmerfuneralhomes.com/obituary/Scott-Hollett" },
      { id: "obit-fasching", title: "Arthur James Fasching, Las Vegas Cremations", url: "https://www.lasvegascremations.com/obituaries/arthur-fasching" },
      { id: "obit-luther", title: "Donald E. Luther, Johnson-Danielson, 11 Dec 2022", url: "https://www.johnson-danielson.com/obituaries/donald-e-luther" },
      { id: "obit-irene", title: "Irene (Yurchak) Palmitessa, NEPA Funeral Home", url: "https://www.nepafuneralhome.com/obituary/Irene-Palmitessa" }
    ],
    "Italian origin & archives": [
      { id: "cognomix", title: "Cognomix, Palmitessa", url: "https://www.cognomix.it/origine-cognome/palmitessa.php" },
      { id: "palazzo", title: "Palazzo Palmitessa, Monopoli (catalogo beni culturali)", url: "https://catalogo.beniculturali.it/detail/ArchitecturalOrLandscapeHeritage/1600181869" },
      { id: "antenati", title: "Antenati, Monopoli registries", url: "https://antenati.cultura.gov.it/search-registry/?localita=Monopoli" },
      { id: "fs-wiki", title: "FamilySearch Wiki, Monopoli", url: "https://www.familysearch.org/en/wiki/Monopoli,_Bari,_Puglia,_Italy_Genealogy" },
      { id: "fs-bari", title: "FamilySearch, Italy, Bari, Civil Registration (State Archive), 1809–1908", url: "https://www.familysearch.org/en/search/collection/1968511" },
      { id: "paese", title: "Paese.app, Palmitessa U.S. arrivals by comune", url: "https://paese.app/cognomi/palmitessa" }
    ],
    "Other published items": [
      { id: "ihsaa", title: "IHSAA swimming, 2008–09, Warsaw sectional, Poaolo Palmitessa SO PLYM", url: "http://www.ihsaa.org/b-swimming/2008-09/Warsaw.htm" },
      { id: "ssdi-locate", title: "locateancestors.com Palmitessa SSDI table and 22 Jun 2016 user note", url: "https://www.locateancestors.com/palmitessa/" },
      { id: "ellis", title: "Statue of Liberty / Ellis Island Heritage Search", url: "https://www.statueofliberty.org/discover/heritagesearch/" },
      { id: "political-graveyard", title: "Political Graveyard, Cosmo A. Palmitessa", url: "https://politicalgraveyard.com/bio/palmer-parillo.html" }
    ]
  }
};
