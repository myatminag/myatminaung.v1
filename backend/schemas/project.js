import { defineField } from "sanity";

export default defineField({
    title: 'Project',
    name: 'project',
    type: 'document',
    fields: [
        defineField({
            title: "ImageUrl",
            name: "imgUrl",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string'
        }),
        defineField({
            title: 'Description', 
            name: 'description',
            type: 'string'
        }),
        defineField({
            title: 'Git Url',
            name: 'gitUrl',
            type: 'string'
        }),
        defineField({
            title: 'Project Url',
            name: 'projectUrl',
            type: 'string'
        }),
        defineField({
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [
                {
                    title: 'Tag',
                    name: 'tag',
                    type: 'string'
                }
            ]
        })
    ]
})