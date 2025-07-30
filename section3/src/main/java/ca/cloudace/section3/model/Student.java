/**
 * This file is part of the section3 project.
 * It is subject to the license terms in the LICENSE file found in the top-level directory of this distribution.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the LICENSE file for the specific language governing permissions and limitations under the license.      
 * (c) 2025 CloudAce.
 * @author:  CloudAce  - Rajeev Khoodeeram
 * @version: 1.0
 */
package ca.cloudace.section3.model;
public class Student {
    private Long id;
    private String name;
    private int age;

    public Student(Long id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

}   