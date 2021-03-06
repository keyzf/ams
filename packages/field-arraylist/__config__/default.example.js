export default {
    resources: {
        arrayList: {
            fields: {
                ArrayList: {
                    type: 'arraylist',
                    label: 'ArrayList',
                    fields: {
                        text: {
                            type: 'text',
                            label: '名称',
                            props: {
                                clearable: false
                            },
                            // fieldLayoutStyle: {
                            //     width: '50%',
                            //     display: 'inline-block'
                            // },
                            rules: [
                                {
                                    required: true,
                                    message: '请输入活动名称',
                                    trigger: 'change',
                                },
                                {
                                    min: 3,
                                    max: 5,
                                    message: '长度在 3 到 5 个字符',
                                    trigger: 'change'
                                }
                            ]
                        },
                        date: {
                            type: 'datetime',
                            label: '日期',
                            rules: [
                                {
                                    required: true,
                                    trigger: 'change',
                                    message: '必填'
                                }
                            ]
                        }
                    }
                }
                // date: {
                //     type: 'datetime',
                //     label: '日期',
                //     rules: [
                //         {
                //             required: true,
                //             trigger: 'change',
                //             message: '必填'
                //         }
                //     ]
                // }
            }
        }
    },
    blocks: {
        arrayListView: {
            type: 'form',
            resource: 'arrayList',
            data: {
                ArrayList: [
                    {
                        'text': '2342',
                        'date': 1545753600000
                    },
                    {
                        'text': '234',
                        'date': 1545148800000
                    }
                ]
            },
            fields: {
                ArrayList: {
                    label: '预览'
                }
            },
            ctx: 'view'
        },
        arrayListEdit: {
            type: 'form',
            resource: 'arrayList',
            data: {
                ArrayList: [
                    {
                        'text': '2342',
                        'date': 1545753600000
                    },
                    {
                        'text': '234',
                        'date': 1545148800000
                    }
                ]
            },
            fields: {
                ArrayList: {
                    label: '编辑'
                }
            },
            ctx: 'edit',
            actions: {
                fieldChange: function({ value, path }) {
                    console.log('fieldChange', value, path);
                }
            }
        }
    }
};
