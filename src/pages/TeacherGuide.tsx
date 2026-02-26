import { Layout } from "../components/Layout";
import { TEACHERS } from "../data/teachers";

const TeacherGuide = () => {
  return (
    <Layout>
      <section className="space-y-6">
        <header className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500 mb-2">師資專區</p>
          <h1 className="text-4xl font-black text-slate-900">網路學系師資與授課專長</h1>
          <p className="text-slate-500 mt-3">
            所有資料以 JSON 檔定義，維運時只要更新 `src/data/teachers.ts` 內容即可同步反映。
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {TEACHERS.slice().sort((a, b) => a.number - b.number).map(teacher => {
            const domainString = teacher.domains.join(" / ");
            return (
            <article
              key={teacher.name}
              className={`group relative overflow-hidden border rounded-2xl p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${
                teacher.isLead ? "bg-gradient-to-br from-amber-100/70 to-amber-50 border-amber-200 shadow-2xl" : "bg-white/90 border-slate-200"
              }`}
            >
              <div className="absolute inset-y-0 right-0 w-1/2">
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="absolute inset-0 w-full h-full object-cover object-bottom transition duration-500 ease-out group-hover:scale-[1.2]"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-4 pr-0 lg:pr-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{teacher.name}</h2>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{teacher.title}</p>
                </div>
                <div className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-900">Email：</span>
                  <a href={`mailto:${teacher.email}`} className="text-blue-600 hover:underline">
                    {teacher.email}
                  </a>
                </div>
                  <div className="text-sm text-slate-500">
                    <span className="font-semibold text-slate-900">專長：</span>
                    {teacher.expertise}
                  </div>
                  <div className="text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">課程領域：</span>
                    {domainString}
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {teacher.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {teacher.description && teacher.description !== domainString ? (
                    <p className="text-slate-600 text-sm leading-relaxed">{teacher.description}</p>
                  ) : null}
                  <div className="text-sm text-slate-500">開課說明：{teacher.availability}</div>
              </div>
              <a
                href={`https://teams.microsoft.com/l/chat/0/0?users=${teacher.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 z-20 rounded-full bg-white/80 px-4 py-1 text-xs font-semibold tracking-[0.3em] text-slate-600 hover:bg-white"
              >
                聯繫老師
              </a>
            </article>
          );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default TeacherGuide;
