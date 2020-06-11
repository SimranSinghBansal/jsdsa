function roboRun(level1, level2, level3, level4)
{
    let l1=level1[0], l2=level1[1], l3=level1[2]
    let bitCheck=(param)=>{
        switch(param)
        {
            case 0: return 0
            case 1: return 1
            case -1: return 1
        }
    }
    if(bitCheck(l1&~l2&l3))
    {
        console.log("Passed Level 1...", level1)
        l1=level2[0]
        l2=level2[1]
        l3=level2[2]
        if(bitCheck(l1&l2&~l3))
        {
            console.log("Passed Level 2...", level2)
            l1=level3[0]
            l2=level3[1]
            l3=level3[2]
            if(bitCheck(l1&l2&l3))
            {
                console.log("Passed Level 3...", level3)
                l1=level4[0]
                l2=level4[1]
                l3=level4[2]
                if(bitCheck(~l1&~l2&~l3))
                {
                    console.log("Passed Level 4.................", level4)
                }
            }
        }
    }
}

// roboRun('101','110','111','000')
// for(let i=0; i<=7; i++)
// {
//     for(let j=0; j<=7; j++)
//     {
//         for(let k=0; k<=7; k++)
//         {
//             for(let l=0; l<=7; l++)
//             {
//                 roboRun(
//                             i.toString(2).padStart(3,'0'),
//                             j.toString(2).padStart(3,'0'),
//                             k.toString(2).padStart(3,'0'),
//                             l.toString(2).padStart(3,'0')
//                         )
//             }
//         }
//     }
// }