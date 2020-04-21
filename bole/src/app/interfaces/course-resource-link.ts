/**
 * A course resource link is every link to another page containing
 * course lecture, pdf, slides, examples etc.
 * On the following link a CourseResourceLink is every item under Week 5
 * https://xd.adobe.com/view/d223df1e-6c52-48ce-6594-d5fb4215f572-a412/screen/c8afde2a-2128-4985-b8ea-65f40396f38f/Course-page
 */
export interface CourseResourceLink {
    type: string;
    name: string;
    link: string;
}
