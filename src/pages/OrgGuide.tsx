import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import { ORG_GUIDE, CATEGORIES } from "../data/site-data";

const OrgGuide = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8 text-center">依組織單位推薦</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {ORG_GUIDE.map((org, index) => {
          const cat = CATEGORIES.find(c => c.id === org.recommendId)!;
          return (
            <div key={index} className="bg-bgSurface p-8 rounded-2xl border border-borderSubtle">
              <div className="text-textMuted text-sm mb-2">如果您是...</div>
              <h2 className="text-2xl font-bold mb-6">{org.type}同仁</h2>
              <div className="border-t border-borderSubtle pt-6">
                <div className="text-xs font-bold text-btnPrimary mb-2 uppercase tracking-widest">強烈推薦</div>
                <Link to={`/categories?tab=${cat.id}`} className="group">
                  <h3 className="text-xl font-bold group-hover:underline">{cat.title}</h3>
                  <p className="text-textMuted mt-2 text-sm">{cat.slogan}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default OrgGuide;