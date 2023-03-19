// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let List = []
let Data = []
export default {
    getUserData: () => {
        for (let i = 0; i < 120; i++) {
            List.push(
                Mock.mock({
                    id: Mock.Random.natural(1, 20),
                    date: Mock.Random.date('yyyy-MM-dd'),
                    QQ: Mock.Random.natural(100000000, 2399999999),
                    gameName: Mock.Random.cword(3),
                    QQName: Mock.Random.cword(3),
                    sex: Mock.Random.pick(["男","女","未知"]),
                    shuntA: Mock.Random.pick(["中","辅","野","射","边"]),
                    shuntB: Mock.Random.pick(["中","辅","野","射","边"]),
                    point: Mock.Random.natural(1200, 2500),
                    group: Mock.Random.pick(["A","C","D","G","Z","散队"]),
                    remark: Mock.Random.cparagraph(1, 4)
                })
            )
        }
        return List
    },
    getTeamMatchData: () => {
        for (let i = 0; i < 12; i++) {
            Data.push(
                Mock.mock({
                    weeks: Mock.Random.pick(["第一周","第二周","第三周","第四周","第五周","第六周"]),
                    groups: []
                })
            )
            for(let j = 0; j<20;j++){
                Data[i].groups.push(
                    Mock.mock({
                        groupPoint: Mock.Random.natural(1800, 2500),
                        group: Mock.Random.pick(["A","C","D","G","Z"]),
                        winning: Mock.Random.pick(["3","3+","4","4+","5","5+","6+"]),
                        members: []
                    })
                )
                for (let l = 0; l < 5; l++) {
                    Data[i].groups[j].members.push(
                        Mock.mock({
                            QQ: Mock.Random.natural(100000000, 2399999999),
                            gameName: Mock.Random.cword(3),
                            sex: Mock.Random.pick(["男","女","未知"]),
                            shuntA: Mock.Random.pick(["中","辅","野","射","边"]),
                            point: Mock.Random.natural(1600, 2500),
                            reward:Mock.Random.natural(2, 20),
                            remark: Mock.Random.cparagraph(1, 4)
                        })
                    )
                }
            }
        }
        return Data
    }
}
